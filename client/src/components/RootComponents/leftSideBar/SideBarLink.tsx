import { ReactElement } from 'react';

import { SideLink } from '../../styledRootComponent';

import '../../../App.css';

interface SideBarLinkProps {
  text: string;
  icon: React.ReactNode;
}

const SideBarLink = ({ text, icon }: SideBarLinkProps): ReactElement => {
  return (
    <SideLink
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
    </SideLink>
  );
};

export default SideBarLink;
