import { ReactElement } from 'react';
import { StyledTeamName } from '../../index';

interface TeamNameProps {
  text: string;
}

const TeamName = ({ text }: TeamNameProps): ReactElement => {
  return <StyledTeamName>{text}</StyledTeamName>;
};

export default TeamName;
