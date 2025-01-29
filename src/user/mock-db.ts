import { User } from "src/entities/user.entity";

export const db: {users: User[]} = {
    users: []
};

const timi = new User;
timi.name = "timi"
timi.email = "odebodezion@gmail.com"
timi.githubProfile = "https://github.com/timiwritescode"

db.users.push(timi);

