import { useState } from 'react';
import { Avatar, Box } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {
  Cover,
  AvatarWrapper,
  MainWrapper,
  EditAvatarIcon,
} from './Player.Styled';
import { playerBackgroundProps } from '../../interfaces/PLayerProfile';
import { customPalette } from '../../interfaces';
import EditGalleryPopup from '../stadiumProfile/EditGallaryPopup';
import { EditGalleryButton } from '../stadiumProfile/StadiumProfile.styled';

const PlayerBackground = ({
  avatar,
  cover,
  playerId,
}: playerBackgroundProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editCover, setEditCover] = useState<boolean>(false);
  const [editAvatar, setEditAvatar] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState<string>('');

  const handleClickCover = () => {
    setType('cover');
    setEdit(true);
  };

  const handleClickAvatar = () => {
    setType('avatar');
    setEdit(true);
  };

  return (
    <>
      <EditGalleryPopup
        editGallery={edit}
        setEditGallery={setEdit}
        ImageId={0}
        userId={playerId}
        gallery={[{}]}
        loading={loading}
        setLoading={setLoading}
        type={type}
      />
      <MainWrapper>
        <AvatarWrapper>
          <Cover
            sx={{
              backgroundImage: `url(${cover})`,
              position: 'relative',
            }}
            onMouseEnter={() => setEditCover(true)}
            onMouseLeave={() => setEditCover(false)}
          >
            {editCover && (
              <EditGalleryButton
                onClick={handleClickCover}
                sx={{
                  left: '2%',
                }}
              >
                تعديل
              </EditGalleryButton>
            )}
          </Cover>
          <Box
            sx={{
              position: 'relative',
              width: 145,
              height: 145,
              marginTop: -10,
              marginRight: '2.5em',
            }}
            onMouseEnter={() => setEditAvatar(true)}
            onMouseLeave={() => setEditAvatar(false)}
          >
            <Avatar
              alt="Remy Sharp"
              src={avatar}
              sx={{
                width: '100%',
                height: '100%',
                border: '6px solid ',
                borderColor: theme =>
                  (theme.palette as customPalette).customColors.backGroundColor,
              }}
            />
            {editAvatar && (
              <EditAvatarIcon onClick={handleClickAvatar}>
                <ModeEditIcon
                  sx={{
                    cursor: 'pointer',
                  }}
                />
              </EditAvatarIcon>
            )}
          </Box>
        </AvatarWrapper>
      </MainWrapper>
    </>
  );
};

export default PlayerBackground;
