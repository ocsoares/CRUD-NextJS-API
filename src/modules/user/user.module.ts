import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { GenerateUserGithubTokenService } from './use-cases/generate-user-github-token/generate-user-github-token.service';
import { GenerateUserGithubTokenController } from './use-cases/generate-user-github-token/generate-user-github-token.controller';
import { HttpModule } from '@nestjs/axios';
import { rateLimiterMiddleware } from '../auth/middlewares/rate-limiter.middleware';

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
    controllers: [GenerateUserGithubTokenController],
    providers: [GenerateUserGithubTokenService],
})
export class UserModule implements NestModule {
    // I used this because NestJS Throttler Module doesn't work !!!
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(rateLimiterMiddleware).forRoutes('auth/*');
    }
}
