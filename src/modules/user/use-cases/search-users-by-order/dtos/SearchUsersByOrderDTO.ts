import { IsIn } from 'class-validator';

export class SearchUsersByOrderDTO {
    @IsIn(['asc', 'desc'])
    readonly order: 'asc' | 'desc';
}
