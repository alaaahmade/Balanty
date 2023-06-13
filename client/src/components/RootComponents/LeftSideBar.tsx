import { AiFillHome } from 'react-icons/ai';
import { BsPersonFillAdd, BsFillFilePersonFill } from 'react-icons/bs';
import { MdStadium } from 'react-icons/md';
import { ReactElement } from 'react';
import UserComponent from './UserComponent';
import SidBarLink from './SidBarLink';
import {
  CreateMatchBox,
  Line,
  SidBox,
  StyledButton,
  StyledTypography,
} from '../index';

const LeftSideBar = (): ReactElement => {
  return (
    <SidBox
      sx={{
        left: 0,
        borderRight: '0.4px solid #ccc',
        boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.15)',
      }}
    >
      <UserComponent />

      <Line />

      <SidBarLink text="الصفحة الرئيسية" icon={<AiFillHome />} />
      <SidBarLink text="اللاعبين" icon={<BsPersonFillAdd />} />
      <SidBarLink text="الملاعب" icon={<MdStadium />} />
      <SidBarLink text="اخر اللاعبين" icon={<BsFillFilePersonFill />} />

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
    </SidBox>
  );
};

export default LeftSideBar;
