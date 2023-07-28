import { Model } from 'sequelize';
declare class MatchPlayer extends Model {
    userId: number;
    matchId: number;
}
export default MatchPlayer;
