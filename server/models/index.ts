import Stadium from './Stadium';
import Match from './Match';
import Player from './Player';
import Message from './Message';
import Review from './Review';
import Gallery from './Gallery';
import User from './User';

User.hasOne(Player);
Player.belongsTo(User);

User.hasOne(Stadium);
Stadium.belongsTo(User);

Match.belongsToMany(User, {
  through: 'matchUsers',
  as: 'users',
});

User.belongsToMany(Match, {
  through: 'matchUsers',
  as: 'matches',
});

//matches
User.hasMany(Match, {
  as: 'stadiumMatches',
});
Match.belongsTo(User);

User.hasMany(Match, {
  as: 'ownerMatches',
});
Match.belongsTo(User);

//revewis
User.hasMany(Review, {
  as: 'userReview',
});
Review.belongsTo(User);

Stadium.hasMany(Review, {
  as: 'stadiumReview',
});
Review.belongsTo(Stadium);

//gallery
Stadium.hasMany(Gallery, {
  as: 'stadiumGallery',
});
Gallery.belongsTo(Stadium);

//User Messeges
User.hasMany(Message, {
  as: 'userMessage',
});
Message.belongsTo(User);

// Math Messages
Match.hasMany(Message, {
  as: 'matchMessage',
});
Message.belongsTo(Match);

export { Player, Stadium, Review, Match, Message, Gallery, User };
