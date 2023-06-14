import React from 'react';
import feature from '../assets/feature.svg';

import {
  StyledBoxFeatures,
  StyledImageFeatures,
  StyledDescriptionFeatures,
  StyledTitle,
} from './index';

interface FeatureProps {
  imageSrc: string;
  description: string;
}

const FeatureSection: React.FC<FeatureProps> = ({ imageSrc, description }) => {
  return (
    <StyledBoxFeatures>
      <StyledImageFeatures src={imageSrc} alt="" />
      <StyledDescriptionFeatures>{description}</StyledDescriptionFeatures>
    </StyledBoxFeatures>
  );
};

const Feature: React.FC = () => {
  return (
    <div>
      <StyledTitle>احجز, العب, شارك, شوت</StyledTitle>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FeatureSection
          imageSrc={feature}
          description="ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب "
        />
        <FeatureSection
          imageSrc={feature}
          description="ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب "
        />
        <FeatureSection
          imageSrc={feature}
          description="ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب "
        />
      </div>
    </div>
  );
};

export default Feature;
