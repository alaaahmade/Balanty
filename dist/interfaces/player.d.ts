import { Player, User } from '../models';
export interface CustomUser extends User {
    Player: Player;
}
