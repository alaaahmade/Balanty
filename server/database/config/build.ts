import { sequelize } from '../config';

import {
  Player,
  Stadium,
  Review,
  Match,
  Message,
  Gallery,
  User,
} from '../../models';

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
  foreignKey: 'stadium_id',
});
Match.belongsTo(User);

User.hasMany(Match, {
  as: 'ownerMatches',
  foreignKey: 'owner_id',
});
Match.belongsTo(User);

//reveiews
User.hasMany(Review, {
  as: 'userReview',
  foreignKey: 'player_id',
});
Review.belongsTo(User);

Stadium.hasMany(Review, {
  as: 'stadiumReview',
  foreignKey: 'stadium_id',
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

const build = () => {
  sequelize.sync({ force: true });
};

export default build;
