import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { rateLimiterMiddleware } from '../auth/middlewares/rate-limiter.middleware';
import { FindAllUsersController } from './use-cases/find-all-users/find-all-users.controller';
import { FindAllUsersService } from './use-cases/find-all-users/find-all-users.service';
import { DeleteAUserService } from './use-cases/delete-a-user/delete-a-user.service';
import { DeleteAUserController } from './use-cases/delete-a-user/delete-a-user.controller';
import { UpdateAUserController } from './use-cases/update-a-user/update-a-user.controller';
import { UpdateAUserService } from './use-cases/update-a-user/update-a-user.service';
import { SearchUsersService } from './use-cases/search-users/search-users.service';
import { SearchUsersController } from './use-cases/search-users/search-users.controller';

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRATION },
            }),
        }),
        HttpModule,
    ],
    controllers: [FindAllUsersController, DeleteAUserController, UpdateAUserController, SearchUsersController],
    providers: [FindAllUsersService, DeleteAUserService, UpdateAUserService, SearchUsersService],
})
export class UserModule implements NestModule {
    // I used this because NestJS Throttler Module doesn't work !!!
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(rateLimiterMiddleware).forRoutes('auth/*');
    }
}
