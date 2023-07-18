import { ReactElement } from 'react';
import { StyledTeamName } from '../../index';
import { TeamNameProps } from '../../../interfaces';

const TeamName = ({ text }: TeamNameProps): ReactElement => {
  return <StyledTeamName>{text}</StyledTeamName>;
};

export default TeamName;
