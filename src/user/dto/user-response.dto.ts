import { User } from "src/entities/user.entity";

export class UserResponseDto {
    email: string;
    github: string;

    constructor( user: User) {
        this.email = user.email;
        this.github = user.githubProfile
    }
}