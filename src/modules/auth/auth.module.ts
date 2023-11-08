import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [UserModule],
    providers: [JwtStrategy],
})
export class AuthModule {}
