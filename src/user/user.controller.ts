import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
    constructor (
        private userService: UserService
    ) {}

    @Get('/:user')
    async getInfo(
        @Param("user") user: string
    ) {
        return this.userService.getUser(user)
    }
}
