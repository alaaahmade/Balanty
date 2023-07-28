import { Model } from 'sequelize';
declare class Match extends Model {
    ownerId: number;
    stadiumId: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    seats: number;
    id: number;
}
export default Match;
