import { Model } from 'sequelize';
declare class Message extends Model {
    message: string;
    UserId: number;
    id: unknown;
}
export default Message;
