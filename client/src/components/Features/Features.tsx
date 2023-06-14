import React, { ReactElement } from 'react';
import feature from '../../assets/feature.svg';
import FeatureSection from './FeatureSection';
import { StyledTitleF } from '../index';

const Feature: React.FC = (): ReactElement => {
  return (
    <div>
      <StyledTitleF>احجز, العب, شارك, شوت</StyledTitleF>
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
