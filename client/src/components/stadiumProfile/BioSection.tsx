import { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Typography, Box, InputAdornment, Button, Rating } from '@mui/material';

import { Edit } from '@mui/icons-material';

import axios from 'axios';

import {
  BioBox,
  FlexBox,
  LocationTypo,
  NewIconButton,
} from './StadiumProfile.styled';

import EditInput from './EditInput';

import {
  updatedValueError,
  updatedValue,
  BioSectionProps,
  customPalette,
} from '../../interfaces';

import { updatedValueSchema } from '../../validation';

const BioSection = ({
  userData,
  editMode,
  setEditMode,
  EditAble,
}: BioSectionProps): ReactElement => {
  const [ratingArray, setRatingArray] = useState<{ value: number }[]>([]);
  const [hov, setHove] = useState<boolean>(false);
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [validation, setValidation] = useState<string>('');
  const [newData, setNewData] = useState<updatedValue>({});
  const [newRating, setNewRating] = useState<number>(0);
  const [playerRating, setPlayerRating] = useState<number>(0);

  const { description, price, ground, address } = userData.Stadium;
  const { username, phone } = userData;

  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => {
    setEditMode(true);
    setMouseOver(false);
  };

  const getReview = async () => {
    try {
      const { data } = await axios.get(`/api/v1/review/${id}`);
      setRatingArray(data.data);
    } catch (error) {
      navigate('/serverError');
    }
  };

  const averageRating =
    ratingArray.reduce((sum, review) => sum + +review.value, 0) /
    ratingArray.length;

  const handleUpdate = async () => {
    try {
      updatedValueSchema.validateSync(newData);
      await axios.patch('/api/v1/stadiums/edit', newData);
      setEditMode(false);
      setValidation('');
    } catch (error) {
      if (
        (error as { name: string; message: string }).name === 'ValidationError'
      ) {
        setValidation((error as { message: string }).message);
      } else if (
        (error as updatedValueError).response.data.data.status === 403
      ) {
        setValidation((error as updatedValueError).response.data.data.message);
      } else {
        navigate('/serverError');
      }
    }
  };

  const handleCancel = async () => {
    setEditMode(false);
    setValidation('');
  };

  const handleMouseOut = () => {
    if (mouseOver) {
      setMouseOver(false);
    }
    setHove(false);
  };

  const handleMouseOver = () => {
    if (!mouseOver) {
      setMouseOver(true);
    }
    setHove(true);
  };

  const addNewReview = async (rate: number) => {
    try {
      await axios.post(`/api/v1/review/${id}`, {
        value: rate.toString(),
      });
      setNewRating(rate);
    } catch (error) {
      navigate('/serverError');
    }
  };

  const getPlayerReview = async () => {
    try {
      const { data } = await axios.get(`/api/v1/review/player/${id}`);
      setPlayerRating(data.data ? data.data.value : 0);
    } catch (error) {
      navigate('/serverError');
    }
  };

  useEffect(() => {
    getReview();
    getPlayerReview();
  }, [id, newRating]);

  return (
    <Box>
      <BioBox
        sx={{
          backgroundColor: theme =>
            (theme.palette as customPalette).customColors.grayColor,
          color: theme => theme.palette.primary.main,
        }}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        <Box>
          {hov && !editMode && (
            <InputAdornment position="end">
              {EditAble && (
                <NewIconButton onClick={handleClick}>
                  <Edit
                    sx={{
                      color: theme => theme.palette.primary.main,
                    }}
                  />
                </NewIconButton>
              )}
            </InputAdornment>
          )}
        </Box>
        <FlexBox
          sx={{
            width: '100%',
            position: 'relative',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '-50px',
            }}
          >
            {username}
          </Typography>
        </FlexBox>
        <FlexBox>
          <Rating
            name="half-rating"
            value={averageRating}
            precision={0.5}
            sx={{
              transform: 'rotateY(180deg)',
            }}
            readOnly
          />
          <Typography variant="h5" sx={{ ml: '5px' }}>
            : التقييم
          </Typography>
        </FlexBox>
        <FlexBox
          sx={{
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        />
        <EditInput
          setNewData={setNewData}
          name="description"
          editMode={editMode}
          lastValue={description}
          multiline
        />
        <FlexBox
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <EditInput
            setNewData={setNewData}
            name="phone"
            editMode={editMode}
            lastValue={phone}
            multiline={false}
          />

          <Typography
            sx={{
              width: '7rem',
              textAlign: 'right',
            }}
          >
            : رقم الهاتف
          </Typography>
        </FlexBox>
        <FlexBox
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <EditInput
            setNewData={setNewData}
            name="price"
            editMode={editMode}
            lastValue={price ? `${price}` : 'قم بكتابة السعر'}
            multiline={false}
          />

          <Typography
            sx={{
              width: '8rem',
              textAlign: 'right',
            }}
          >
            : سعر الساعة
          </Typography>
        </FlexBox>

        <FlexBox
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <EditInput
            setNewData={setNewData}
            name="ground"
            editMode={editMode}
            lastValue={ground}
            multiline={false}
          />
          <Typography
            sx={{
              width: '5rem',
              textAlign: 'right',
            }}
          >
            : الأرضية
          </Typography>
        </FlexBox>
        <FlexBox
          sx={{
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <FlexBox
            sx={{
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <EditInput
              setNewData={setNewData}
              name="address"
              editMode={editMode}
              lastValue={address}
              multiline={false}
            />

            <LocationTypo
              sx={{
                width: '5rem',
                alignItems: 'center',
              }}
            >
              : الموقع
            </LocationTypo>
          </FlexBox>
        </FlexBox>
        {!EditAble && (
          <FlexBox
            sx={{
              gap: '10px',
            }}
          >
            <Rating
              name="half-rating"
              value={+newRating || +playerRating}
              precision={0.5}
              onChange={e => {
                addNewReview(+(e.target as HTMLInputElement).value);
              }}
              sx={{
                transform: 'rotateY(180deg)',
              }}
            />
            : قيم الموقع
          </FlexBox>
        )}
        {editMode ? (
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Button onClick={handleCancel}>الغاء</Button>
            <Button onClick={handleUpdate}>حفظ</Button>
          </Box>
        ) : null}
        {validation && (
          <Typography
            sx={{
              color: 'red',

              m: '-10px 5px 10px 5px',
            }}
          >
            {validation}
          </Typography>
        )}
      </BioBox>
    </Box>
  );
};

export default BioSection;
