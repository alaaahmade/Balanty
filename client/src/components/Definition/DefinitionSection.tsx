import React, { ReactElement } from 'react';
import {
  StyledDefinitionSection,
  StyledDescription,
  StyledTitle,
} from './Definition.styled';

interface DefinitionProps {
  title: string;
  description: string;
}

const DefinitionSection: React.FC<DefinitionProps> = ({
  title,
  description,
}: DefinitionProps): ReactElement => {
  return (
    <StyledDefinitionSection>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledDefinitionSection>
  );
};

export default DefinitionSection;
