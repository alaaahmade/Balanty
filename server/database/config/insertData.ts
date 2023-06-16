import data from './seeds.json';
import {
  Gallery,
  Match,
  Message,
  Player,
  Review,
  Stadium,
  User,
} from '../../models';

const insertData = async (): Promise<void> => {
  await User.bulkCreate(data.Users);
  await Player.bulkCreate(data.Players);
  await Stadium.bulkCreate(data.Stadiums);
  await Match.bulkCreate(data.Matches);
  await Gallery.bulkCreate(data.Gallery);
  await Message.bulkCreate(data.Message);
  await Review.bulkCreate(data.Review);
};

export default insertData;
