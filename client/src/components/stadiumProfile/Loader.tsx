import { LDiv, LoaderBox, LoaderContainer } from './StadiumProfile.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderBox>
        <LDiv
          style={{
            animationDelay: ' -0.45s',
          }}
        />
        <LDiv
          style={{
            animationDelay: '-0.3s',
          }}
        />
        <LDiv
          style={{
            animationDelay: '-0.15s',
          }}
        />
        <LDiv />
      </LoaderBox>
    </LoaderContainer>
  );
};

export default Loader;
