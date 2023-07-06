import {
  Container,
  ErrorSvg,
  ErrorSubtitle,
  ButtonContainer,
  ErrorButton,
} from '../components/errros/Errors.Styled';

const InternalServerErrorPage = () => {
  return (
    <Container>
      <ErrorSvg
        src="https://res.cloudinary.com/dtpbcx2kv/image/upload/v1688628778/valzxxthg1wyqqzcjs87.gif"
        alt=""
      />
      <ErrorSubtitle variant="h3">خطأ في الخادم الداخلي</ErrorSubtitle>
      <ButtonContainer>
        <ErrorButton href="/" variant="contained">
          العودة إلى الصفحة الرئيسية
        </ErrorButton>
      </ButtonContainer>
    </Container>
  );
};

export default InternalServerErrorPage;
