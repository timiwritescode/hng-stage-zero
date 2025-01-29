import { User } from "src/entities/user.entity";

export class UserResponseDto {
    email: string;
    github_url: string;
    current_datetime: string
    constructor( user: User) {
        this.email = user.email;
        this.github_url = user.githubProfile;
        this.current_datetime = new Date().toISOString()
    }
}