import { AiFillHome } from 'react-icons/ai';
import { BsPersonFillAdd, BsFillFilePersonFill } from 'react-icons/bs';
import { MdStadium } from 'react-icons/md';
import { FC, ReactElement, useContext } from 'react';
import UserCart from './UserCart';
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
        borderLeft: '0.4px solid #ccc',
        boxShadow: '-5px 4px 4px rgba(0, 0, 0, 0.15)',
      }}
    >
      <UserCart username={(user as User).username} userId={(user as User).id} />

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

        <StyledButton onClick={handleClickOpen}>انشاء مباراة</StyledButton>
      </CreateMatchBox>
    </SideBox>
  );
};

export default LeftSideBar;
