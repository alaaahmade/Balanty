import { Model } from 'sequelize';
declare class Stadium extends Model {
    user_id: number;
    address: string;
    description: string;
    price: number;
    ground: string;
}
export default Stadium;
