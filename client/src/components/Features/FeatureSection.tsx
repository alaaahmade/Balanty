import React, { ReactElement } from 'react';

import {
  StyledBoxFeatures,
  StyledImageFeatures,
  StyledDescriptionFeatures,
} from '../index';

interface FeatureSectionProps {
  imageSrc: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  imageSrc,
  description,
}): ReactElement => {
  return (
    <StyledBoxFeatures>
      <StyledImageFeatures src={imageSrc} alt="" />
      <StyledDescriptionFeatures>{description}</StyledDescriptionFeatures>
    </StyledBoxFeatures>
  );
};

export default FeatureSection;
