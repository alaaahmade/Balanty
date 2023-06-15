import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import feature from '../../assets/feature.svg';
import FeatureSection from './FeatureSection';
import { StyledTitleF } from './Features.styled';

const Feature: React.FC = (): ReactElement => {
  return (
    <Box>
      <StyledTitleF>احجز, العب, شارك, شوت</StyledTitleF>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
      </Box>
    </Box>
  );
};

export default Feature;
