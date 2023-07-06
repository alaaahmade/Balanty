import { ReactElement } from 'react';

import '../../../App.css';
import { DarkSideLink } from '../../styledRootComponent/LiftSideBarStyledComponent';

interface SideBarLinkProps {
  text: string;
  icon: React.ReactNode;
}

const SideBarLink = ({ text, icon }: SideBarLinkProps): ReactElement => {
  return (
    <DarkSideLink
      style={{
        backgroundColor: 'wight',
      }}
      to={
        text === 'الصفحة الرئيسية'
          ? '/home'
          : text === 'اللاعبين'
          ? '/home/players'
          : text === 'الملاعب'
          ? '/home/stadiums'
          : text === 'اخر اللاعبين'
          ? '/home/lastPlayer'
          : '/home'
      }
    >
      {text}
      {icon}
    </DarkSideLink>
  );
};

export default SideBarLink;
