import { ReactElement, useState } from 'react';

import {
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Edit } from '@mui/icons-material';
import { BioBox, FlexBox, LocationTypo } from './StadiumProfile.styled';

import EditInput from './EditInput';

import { UserData } from '../../interfaces/StadiumProfile';

type Props = {
  userData: UserData;
};
const BioSection = ({ userData }: Props): ReactElement => {
  const { description, price, ground, address } = userData.Stadium;
  const { username, phone } = userData;
  const [editMode, setEditMode] = useState(false);
  const [EditAble, setEditAble] = useState(true);
  const [hov, setHove] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const handleClick = () => {
    setEditMode(true);
    setMouseOver(false);
  };
  const handleUpdate = async () => {
    setEditMode(false);
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
    <Box>
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
                mr: '45px',
              }}
              position="end"
            >
              {EditAble && (
                <IconButton onClick={handleClick}>
                  <Edit />
                </IconButton>
              )}
            </InputAdornment>
          )}
          <Box
            sx={{
              color: 'yellow',
            }}
          >
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Box>

          <Typography variant="h5" sx={{ ml: '5px' }}>
            {username}
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
        <EditInput editMode={editMode} lastValue={description} multiline />
        <FlexBox
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <EditInput editMode={editMode} lastValue={phone} multiline={false} />

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
            editMode={editMode}
            lastValue={price ? `شيكل${price}` : 'قم بكتابة السعر'}
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
          <EditInput editMode={editMode} lastValue={ground} multiline={false} />
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
            // mt: '15px',
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
            <Button onClick={handleUpdate}>الغاء</Button>
            <Button onClick={handleUpdate}>حفظ</Button>
          </Box>
        ) : null}
      </BioBox>
    </Box>
  );
};

export default BioSection;
