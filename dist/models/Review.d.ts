import { Model } from 'sequelize';
declare class Review extends Model {
    PlayerId: number;
    StadiumId: number;
    value: string;
}
export default Review;
