import Stadium from './Stadium';
import Match from './Match';
import Player from './Player';
import Message from './Message';
import Review from './Review';
import Gallery from './Gallery';
import User from './User';

// user has one Player
User.hasOne(Player);
Player.belongsTo(User);
// user has one Stadium
User.hasOne(Stadium);
Stadium.belongsTo(User);

// User Model relations start

// Establish the first one-to-many relationship with custom association names
User.hasMany(Match, { foreignKey: 'ownerId', as: 'ownersMatches' });
Match.belongsTo(User, { foreignKey: 'ownerId', as: 'ownerUser' });

// Establish the second one-to-many relationship with custom association names
User.hasMany(Match, { foreignKey: 'stadiumId', as: 'StadiumsMatches' });
Match.belongsTo(User, { foreignKey: 'stadiumId', as: 'stadiumMatch' });

User.belongsToMany(Match, {
  through: 'MatchPlayer',
  as: 'Matches',
  foreignKey: 'userId',
});

Match.belongsToMany(User, {
  through: 'MatchPlayer',
  as: 'Players',
  foreignKey: 'matchId',
});

// User with Message

User.hasMany(Message, {
  as: 'userMessage',
});
Message.belongsTo(User);

// Match with Message
Match.hasMany(Message, {
  as: 'MatchMessages',
});
Message.belongsTo(Match);

// User as reviewer relationship between User and Review
User.hasMany(Review, { foreignKey: 'playerId', as: 'playersReviews' });
Review.belongsTo(User, { foreignKey: 'playerId', as: 'Reviewers' });

// User as Stadium relationship between User and Review
User.hasMany(Review, { foreignKey: 'stadiumId', as: 'StadiumsReviews' });
Review.belongsTo(User, { foreignKey: 'stadiumId', as: 'ReviewedStadium' });

//gallery
Stadium.hasMany(Gallery, {
  as: 'stadiumGallery',
});
Gallery.belongsTo(Stadium);

export { Player, Stadium, Review, Match, Message, Gallery, User };
