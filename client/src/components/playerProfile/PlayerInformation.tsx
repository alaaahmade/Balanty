import React, { ReactElement, useState } from 'react';
import {
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import { FlexBox, LocationTypo } from '../stadiumProfile/StadiumProfile.styled';
import { BioBox } from './Player.Styled';
import EditInput from '../stadiumProfile/EditInput';
import updateProfileSchema from '../../validation/PLayerSchema';
import {
  updatedValue,
  updatedValueError,
  profileInfoProps,
  Props,
} from '../../interfaces/PLayerProfile';

const PlayerInformation = ({
  // userData,
  editMode,
  setEditMode,
}: profileInfoProps): ReactElement => {
  // const { bio, age, position, address } = userData.Player;
  // const { username, phone } = userData;

  const [EditAble, setEditAble] = useState(true);
  const [save, setSave] = useState(false);
  const [hov, setHove] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [validation, setValidation] = useState('');
  const [newData, setNewData] = useState<updatedValue>({});

  // const navigate = useNavigate();

  const handleClick = () => {
    setEditAble(true);
    setMouseOver(false);
  };
  const handleUpdate = async () => {
    try {
      updateProfileSchema.validateSync(newData);
      await axios.patch('/api/v1/players/profile/edit', newData);
      setEditMode(false);
      setSave(true);
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
        // navigate('/serverError');
        console.log('error');
      }
    }
  };

  const handleCancel = async () => {
    setSave(false);
    setEditAble(false);
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

  return (
    <Box
      sx={{
        gap: '1px',
      }}
    >
      <BioBox
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        <FlexBox
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {hov && !editMode && (
            <InputAdornment
              sx={{
                mr: '30px',
              }}
              position="end"
            >
              {EditAble && (
                <IconButton onClick={handleClick}>
                  <Edit />
                </IconButton>
              )}
            </InputAdornment>
          )}{' '}
          <Typography variant="h5" sx={{ ml: '5px' }}>
            معلومات شخصية
          </Typography>
        </FlexBox>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        />
        <FlexBox
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <EditInput
            setNewData={setNewData}
            name="bio"
            editMode={editMode}
            lastValue="مش عارف مين انا"
            multiline
          />
          <Typography
            sx={{
              width: '7rem',
              textAlign: 'right',
            }}
          >
            الوصف
          </Typography>
        </FlexBox>
        <FlexBox
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <EditInput
            setNewData={setNewData}
            name="age"
            editMode={editMode}
            lastValue="5"
            multiline={false}
          />

          <Typography
            sx={{
              width: '8rem',
              textAlign: 'right',
            }}
          >
            العمر
          </Typography>
        </FlexBox>
        <FlexBox
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <EditInput
            setNewData={setNewData}
            name="phone"
            editMode={editMode}
            lastValue="6558965"
            multiline={false}
          />

          <Typography
            sx={{
              width: '8rem',
              textAlign: 'right',
            }}
          >
            الهاتف
          </Typography>
        </FlexBox>
        <FlexBox
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <EditInput
            setNewData={setNewData}
            name="position"
            editMode={editMode}
            lastValue="مهاجم"
            multiline={false}
          />
          <Typography
            sx={{
              width: '5rem',
              textAlign: 'right',
            }}
          >
            : المركز
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
              lastValue="قطاع غزة"
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
        />
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

export default PlayerInformation;
