import { Request } from 'express';
import { Review, Stadium, User } from '../models';
import { reviewSchema } from '../validations';

export const getReviewService = async (
  req: Request,
): Promise<{ status: number; data: string | object }> => {
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

export const addReviewService = async (
  req: Request,
): Promise<{ status: number; data: string | object }> => {
  const UserId = req.user?.id;
  const { stadiumId } = req.params;
  const { body } = req;

  const checkPlayer = await User.findOne({ where: { id: UserId } });
  const checkStadium = await Stadium.findOne({ where: { id: stadiumId } });

  if (!checkStadium) {
    return {
      status: 404,
      data: '! هذا الملعب غير موجود ',
    };
  } else if (!checkPlayer) {
    return {
      status: 404,
      data: '! هذا اللاعب غير موجود ',
    };
  }
  const { value } = await reviewSchema.validateAsync(body);

  const checkReview = await Review.findOne({
    where: { playerId: UserId, stadiumId },
  });

  if (checkReview) {
    const updatedReview = await Review.update(
      { value },
      { where: { stadiumId }, returning: true },
    );
    return {
      status: 200,
      data: updatedReview[1][0],
    };
  } else {
    const newReview = await Review.create({
      playerId: UserId,
      stadiumId,
      value,
    });
    return {
      status: 200,
      data: newReview,
    };
  }
};

export const getPlayerReviewService = async (
  req: Request,
): Promise<{ status: number; data: object | string | null }> => {
  const playerId = req.user?.id;
  const { stadiumId } = req.params;

  if (!playerId) {
    return {
      status: 401,
      data: 'UnAuthorize',
    };
  }

  const checkPlayer = await User.findOne({ where: { id: playerId } });
  const checkStadium = await Stadium.findOne({ where: { id: stadiumId } });

  if (!checkStadium) {
    return {
      status: 404,
      data: '! هذا الملعب غير موجود ',
    };
  } else if (!checkPlayer) {
    return {
      status: 404,
      data: '! هذا اللاعب غير موجود ',
    };
  }

  const playerReview = await Review.findOne({
    where: { playerId, stadiumId },
    attributes: ['id', 'value', 'playerId', 'stadiumId'],
  });

  return {
    status: 200,
    data: playerReview,
  };
};
