import React from 'react';
import {
  StyledDefinitionSection,
  StyledTitle,
  StyledDescription,
} from './index';

interface DefinitionProps {
  title: string;
  description: string;
}

const DefinitionSection: React.FC<DefinitionProps> = ({
  title,
  description,
}) => {
  return (
    <StyledDefinitionSection>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledDefinitionSection>
  );
};

const Definition: React.FC = () => {
  return (
    <div>
      <DefinitionSection
        title="من نحن"
        description="بلنتي هو موقع حجوزات ملاعب كرة القدم الذي يوفر للمستخدمين وسيلة سهلة ومريحة لحجز الملاعب عبر الإنترنت. يقدم بلنتي مجموعة متنوعة من الملاعب المتاحة للحجز في مختلف المناطق، مما يسمح للمستخدمين بالعثور على الملعب المثالي لاحتياجاتهم. باستخدام بلنتي، يمكن للمستخدمين تصفح قائمة الملاعب المتاحة وعرض التفاصيل الكاملة لكل ملعب، بما في ذلك الموقع، وحجم الملعب، ووسائل الراحة المتاحة، وأوقات الحجز المتاحة. كما يوفر الموقع نظامًا مبسطًا لحجز الملاعب حيث يمكن للمستخدمين اختيار التاريخ والوقت المفضل للحجز وإكمال عملية الحجز بسهولة وسرعة."
      />
    </div>
  );
};

export default Definition;
