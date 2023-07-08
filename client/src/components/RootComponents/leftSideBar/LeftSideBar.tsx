import { FC, ReactElement, useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFillAdd, BsFillFilePersonFill } from 'react-icons/bs';
import { MdStadium } from 'react-icons/md';

import { Box } from '@mui/material';
import UserCard from './UserCard';
import SideBarLink from './SideBarLink';
import {
  CreateMatchBox,
  SideBox,
  StyledButton,
  StyledTypography,
} from '../../index';
import { LeftSideBarInterface, User } from '../../../interfaces';
import { AuthContext } from '../../../context';

const LeftSideBar: FC<LeftSideBarInterface> = ({ setOpen }): ReactElement => {
  const { user } = useContext(AuthContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <SideBox
      sx={{
        right: 0,
        borderLeft: '1px solid ',
        borderLeftColor: theme => theme.palette.primary.grayColor,
        backgroundColor: theme => theme.palette.primary.grayColor,
        boxShadow: '-1px 4px 6px 1px rgba(0, 0, 0, 0.15)',
      }}
    >
      <UserCard
        username={(user as User).username}
        userId={(user as User).id}
        role={(user as User).role}
      />

      <Box
        sx={{
          width: '100%',
        }}
      >
        <SideBarLink text="الصفحة الرئيسية" icon={<AiFillHome />} />
        <SideBarLink text="اللاعبين" icon={<BsPersonFillAdd />} />
        <SideBarLink text="الملاعب" icon={<MdStadium />} />
        <SideBarLink text="اخر اللاعبين" icon={<BsFillFilePersonFill />} />
      </Box>
      <CreateMatchBox
        sx={{
          backgroundColor: theme => theme.palette.primary.backGroundColor,
          color: theme => theme.palette.primary.main,
        }}
      >
        <StyledTypography
          sx={{
            mb: '10px',
          }}
        >
          يمكنك انشاء مباراة ودعوة اصدقائك للانضمام اليك
        </StyledTypography>

        <StyledButton onClick={handleClickOpen}>انشاء مباراة</StyledButton>
      </CreateMatchBox>
    </SideBox>
  );
};

export default LeftSideBar;
