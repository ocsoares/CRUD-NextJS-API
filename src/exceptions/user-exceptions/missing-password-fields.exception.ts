import { BadRequestException } from '@nestjs/common';

export class MissingPasswordFieldsException extends BadRequestException {
    constructor() {
        super(['password and confirmPassword must exist']);
    }
}
