import { Model } from 'sequelize';
declare class Player extends Model {
    UserId: number;
    avatar: string;
    age: number;
    position: string;
    cover: string;
    bio: string;
}
export default Player;
