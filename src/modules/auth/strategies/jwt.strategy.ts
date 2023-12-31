import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IUserJWT } from '../models/IUserJWT';
import { IUserPayload } from '../models/IUserPayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: Buffer.from(process.env.JWT_PUBLIC_KEY, 'base64'),
        });
    }

    async validate({
        email,
        firstName,
        lastName,
        sub,
    }: IUserPayload): Promise<IUserJWT> {
        return {
            id: sub,
            email,
            firstName,
            lastName,
        };
    }
}
