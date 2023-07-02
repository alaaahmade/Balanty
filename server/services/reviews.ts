import { Request } from 'express';
import { Review, Stadium, User } from '../models';

export const getReviewService = async (req: Request) => {
  // const { UserId } = req.user; this id will comming from checkAuth middillware
  const UserId = 4; //and this will removed
  const { stadiumId } = req.params;

  const checkStadium = await Stadium.findOne({ where: { id: stadiumId } });

  if (!checkStadium) {
    return {
      status: 404,
      data: '! هذا الملعب غير موجود ',
    };
  }

  const reviews = await Review.findAll({
    where: { stadiumId },
    attributes: ['id', 'value', 'playerId', 'stadiumId'],
  });
  return {
    status: 200,
    data: reviews,
  };
};
