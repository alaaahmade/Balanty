import { ReactElement } from 'react';

import '../../../App.css';
import { useTheme } from '@emotion/react';
import { DarkSideLink } from '../../styledRootComponent/LiftSideBarStyledComponent';

interface SideBarLinkProps {
  text: string;
  icon: React.ReactNode;
}

const SideBarLink = ({ text, icon }: SideBarLinkProps): ReactElement => {
  const currentTheme = useTheme();
  return (
    <DarkSideLink
      sx={{
        backgroundColor: currentTheme.palette.primary.grayColor,
        color: currentTheme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: currentTheme.palette.primary.backGroundColor,
          color: currentTheme.palette.primary.main,
          padding: '15px 30px 15px 0',
        },
      }}
      to={
        text === 'الصفحة الرئيسية'
          ? '/home'
          : text === 'اللاعبين'
          ? '/home/players'
          : text === 'الملاعب'
          ? '/home/stadiums'
          : text === 'اخر اللاعبين'
          ? '/home/players'
          : '/home'
      }
    >
      {text}
      {icon}
    </DarkSideLink>
  );
};

export default SideBarLink;
