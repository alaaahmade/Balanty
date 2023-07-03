import { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Typography, Box, InputAdornment, Button, Rating } from '@mui/material';

import StarBorderIcon from '@mui/icons-material/StarBorder';
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
} from '../../interfaces';

import { updatedValueSchema } from '../../validation';

const BioSection = ({
  userData,
  editMode,
  setEditMode,
}: BioSectionProps): ReactElement => {
  const [ratingArray, setRatingArray] = useState<{ value: number }[]>([]);
  const [EditAble, setEditAble] = useState<boolean>(true);
  const [hov, setHove] = useState<boolean>(false);
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [validation, setValidation] = useState<string>('');
  const [newData, setNewData] = useState<updatedValue>({});

  const { description, price, ground, address } = userData.Stadium;
  const { username, phone } = userData;

  const { id } = useParams();

  const navigate = useNavigate();

  const handleClick = () => {
    setEditMode(true);
    setMouseOver(false);
  };

  const getReview = async () => {
    try {
      const { data } = await axios.get(`/api/v1/review/${id}`);
      setRatingArray(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const averageRating =
    ratingArray.reduce((sum, review) => sum + review.value, 0) /
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

  useEffect(() => {
    getReview();
  }, [id]);

  return (
    <Box>
      <BioBox onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
        <Box>
          {hov && !editMode && (
            <InputAdornment position="end">
              {EditAble && (
                <NewIconButton onClick={handleClick}>
                  <Edit />
                </NewIconButton>
              )}
            </InputAdornment>
          )}
        </Box>
        <FlexBox
          sx={{
            width: '100%',
          }}
        >
          <Typography variant="h5" sx={{ ml: '5px' }}>
            {username}
          </Typography>
        </FlexBox>
        <FlexBox>
          <Rating
            name="half-rating"
            value={averageRating}
            precision={0.5}
            sx={{
              direction: 'rtl',
            }}
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
            : السعر الساعة
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              color: 'yellow',
            }}
          >
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
          </Box>
          <Typography
            sx={{
              width: '7rem',
              textAlign: 'right',
            }}
          >
            : اضافة تقييم
          </Typography>
        </Box>
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
