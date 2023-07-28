"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Gallery = exports.Message = exports.Match = exports.Review = exports.Stadium = exports.Player = void 0;
const Stadium_1 = __importDefault(require("./Stadium"));
exports.Stadium = Stadium_1.default;
const Match_1 = __importDefault(require("./Match"));
exports.Match = Match_1.default;
const Player_1 = __importDefault(require("./Player"));
exports.Player = Player_1.default;
const Message_1 = __importDefault(require("./Message"));
exports.Message = Message_1.default;
const Review_1 = __importDefault(require("./Review"));
exports.Review = Review_1.default;
const Gallery_1 = __importDefault(require("./Gallery"));
exports.Gallery = Gallery_1.default;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const MatchPlayer_1 = __importDefault(require("./MatchPlayer"));
// user has one Player
User_1.default.hasOne(Player_1.default);
Player_1.default.belongsTo(User_1.default);
// user has one Stadium
User_1.default.hasOne(Stadium_1.default);
Stadium_1.default.belongsTo(User_1.default);
// User Model relations start
// Establish the first one-to-many relationship with custom association names
User_1.default.hasMany(Match_1.default, { foreignKey: 'ownerId', as: 'ownersMatches' });
Match_1.default.belongsTo(User_1.default, { foreignKey: 'ownerId', as: 'ownerUser' });
// Establish the second one-to-many relationship with custom association names
User_1.default.hasMany(Match_1.default, { foreignKey: 'stadiumId', as: 'StadiumsMatches' });
Match_1.default.belongsTo(User_1.default, { foreignKey: 'stadiumId', as: 'stadiumMatch' });
User_1.default.belongsToMany(Match_1.default, {
    through: MatchPlayer_1.default,
    as: 'Matches',
    foreignKey: 'userId',
});
Match_1.default.belongsToMany(User_1.default, {
    through: MatchPlayer_1.default,
    as: 'Players',
    foreignKey: 'matchId',
});
// User with Message
User_1.default.hasMany(Message_1.default, {
    as: 'userMessage',
});
Message_1.default.belongsTo(User_1.default);
// Match with Message
Match_1.default.hasMany(Message_1.default, {
    as: 'MatchMessages',
});
Message_1.default.belongsTo(Match_1.default);
// User as reviewer relationship between User and Review
User_1.default.hasMany(Review_1.default, { foreignKey: 'playerId', as: 'playersReviews' });
Review_1.default.belongsTo(User_1.default, { foreignKey: 'playerId', as: 'Reviewers' });
// User as Stadium relationship between User and Review
User_1.default.hasMany(Review_1.default, { foreignKey: 'stadiumId', as: 'StadiumsReviews' });
Review_1.default.belongsTo(User_1.default, { foreignKey: 'stadiumId', as: 'ReviewedStadium' });
//gallery
Stadium_1.default.hasMany(Gallery_1.default, {
    as: 'stadiumGallery',
});
Gallery_1.default.belongsTo(Stadium_1.default);
