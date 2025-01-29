import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { UserResponseDto } from "./dto/user-response.dto";
import { db } from "./mock-db";

@Injectable()
export class UserService {
    getUser(username: string): UserResponseDto{
        try {
            const userByName = db.users.find(user => user.name == username);
            if (!userByName) {
                throw new NotFoundException("user not found")
            }
            return new UserResponseDto(userByName)
            
        } 
        catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException("An error occured")
        }
    }
}