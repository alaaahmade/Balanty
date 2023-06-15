import { AiFillHome } from 'react-icons/ai';
import { BsPersonFillAdd, BsFillFilePersonFill } from 'react-icons/bs';
import { MdStadium } from 'react-icons/md';
import { ReactElement } from 'react';
import UserCart from './UserCart';
import SideBarLink from './SideBarLink';
import {
  CreateMatchBox,
  SideBox,
  StyledButton,
  StyledTypography,
} from '../../index';

const LeftSideBar = (): ReactElement => {
  return (
    <SideBox
      sx={{
        left: 0,
        borderRight: '0.4px solid #ccc',
        boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.15)',
      }}
    >
      <UserCart />

      <SideBarLink text="الصفحة الرئيسية" icon={<AiFillHome />} />
      <SideBarLink text="اللاعبين" icon={<BsPersonFillAdd />} />
      <SideBarLink text="الملاعب" icon={<MdStadium />} />
      <SideBarLink text="اخر اللاعبين" icon={<BsFillFilePersonFill />} />

      <CreateMatchBox
        sx={{
          mt: '120px',
        }}
      >
        <StyledTypography>
          يمكنك انشاء مباراة ودعوة اصدقائك للانضمام اليك
        </StyledTypography>
        <StyledButton>انشاء مباراة</StyledButton>
      </CreateMatchBox>
    </SideBox>
  );
};

export default LeftSideBar;
