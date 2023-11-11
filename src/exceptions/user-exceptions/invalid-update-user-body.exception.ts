import { BadRequestException } from '@nestjs/common';

export class InvalidUpdateUserBodyException extends BadRequestException {
    constructor() {
        super(
            'Update the firstName, lastName, email, password or confirmPassword field ! ',
        );
    }
}
