import { AiFillHome } from 'react-icons/ai';
import { BsPersonFillAdd, BsFillFilePersonFill } from 'react-icons/bs';
import { MdStadium } from 'react-icons/md';
import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import UserCart from './UserCart';
import SideBarLink from './SideBarLink';
import {
  CreateMatchBox,
  SideBox,
  StyledButton,
  StyledTypography,
} from '../../index';
import { LeftSideBarInterface } from '../../../interfaces';

const LeftSideBar: FC<LeftSideBarInterface> = ({ setOpen }): ReactElement => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <SideBox
      sx={{
        right: 0,
        borderLeft: '0.4px solid #ccc',
        boxShadow: '-1px 4px 6px 1px rgba(0, 0, 0, 0.15)',
      }}
    >
      <UserCart />

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
      <CreateMatchBox>
        <StyledTypography>
          يمكنك انشاء مباراة ودعوة اصدقائك للانضمام اليك
        </StyledTypography>

        <StyledButton onClick={handleClickOpen}>انشاء مباراة</StyledButton>
      </CreateMatchBox>
    </SideBox>
  );
};

export default LeftSideBar;
