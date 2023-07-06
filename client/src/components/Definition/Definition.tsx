import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import DefinitionSection from './DefinitionSection';

const Definition: React.FC = (): ReactElement => {
  return (
    <Box id="definitionLink">
      <DefinitionSection
        title="من نحن"
        description="بلنتي هو موقع حجوزات ملاعب كرة القدم الذي يوفر للمستخدمين وسيلة سهلة ومريحة لحجز الملاعب عبر الإنترنت. يقدم بلنتي مجموعة متنوعة من الملاعب المتاحة للحجز في مختلف المناطق، مما يسمح للمستخدمين بالعثور على الملعب المثالي لاحتياجاتهم. باستخدام بلنتي، يمكن للمستخدمين تصفح قائمة الملاعب المتاحة وعرض التفاصيل الكاملة لكل ملعب، بما في ذلك الموقع، وحجم الملعب، ووسائل الراحة المتاحة، وأوقات الحجز المتاحة. كما يوفر الموقع نظامًا مبسطًا لحجز الملاعب حيث يمكن للمستخدمين اختيار التاريخ والوقت المفضل للحجز وإكمال عملية الحجز بسهولة وسرعة."
      />
    </Box>
  );
};

export default Definition;
