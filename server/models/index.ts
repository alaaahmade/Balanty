import Stadium from './Stadium';
import Match from './Match';
import Player from './Player';
import Message from './Message';
import Review from './Review';
import Gallery from './Gallery';
import User from './User';

User.hasOne(Player, {
  foreignKey: {
    name: 'user_id',
  },
});
Player.belongsTo(User);

User.hasOne(Stadium, {
  foreignKey: {
    name: 'user_id',
  },
});
Stadium.belongsTo(User);

Match.belongsToMany(User, {
  through: 'matchUsers',
  as: 'users',
  foreignKey: 'match_id',
});

User.belongsToMany(Match, {
  through: 'matchUsers',
  as: 'matches',
  foreignKey: 'user_id',
});

//matches
User.hasMany(Match, {
  as: 'stadiumMatches',
  foreignKey: 'user_id',
});
Match.belongsTo(User);

User.hasMany(Match, {
  as: 'ownerMatches',
  foreignKey: 'owner_id',
});
Match.belongsTo(User);

//revewis
User.hasMany(Review, {
  as: 'userReview',
  foreignKey: 'player_id',
});
Review.belongsTo(User);

Stadium.hasMany(Review, {
  as: 'stadiumReview',
  foreignKey: 'Satd_id',
});
Review.belongsTo(Stadium);

//gallery
Stadium.hasMany(Gallery, {
  as: 'stadiumGallery',
  foreignKey: 'stadium_id',
});
Gallery.belongsTo(Stadium);

//User Messeges
User.hasMany(Message, {
  as: 'userMessage',
  foreignKey: 'user_id',
});
Message.belongsTo(User);

// Math Messages
Match.hasMany(Message, {
  as: 'matchMessage',
  foreignKey: 'match_id',
});
Message.belongsTo(Match);

export { Player, Stadium, Review, Match, Message, Gallery, User };
