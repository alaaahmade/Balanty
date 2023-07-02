import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FC, ReactElement, useState } from 'react';
import {
  ArrowStyle,
  SliderBox,
  SliderImage,
  ThumbnailBox,
  ThumbnailImage,
} from './StadiumProfile.styled';
import {
  StadiumGallery,
  StadiumProfileProps,
} from '../../interfaces/StadiumProfile';

const ImageSlider: FC<StadiumProfileProps> = ({ gallery }): ReactElement => {
  const [Active, setActive] = useState(0);

  const handleSlideChange = (currentSlide: number, e: number) => {
    const { id } = gallery[e];
    setActive(id);
  };

  return (
    <SliderBox>
      <Slide
        prevArrow={
          <ArrowStyle
            onAbort={() => {
              setActive(0);
            }}
            style={{ left: '20px' }}
          >
            <ArrowBackIosIcon />
          </ArrowStyle>
        }
        nextArrow={
          <ArrowStyle style={{ right: '20px' }}>
            <ArrowForwardIosIcon />
          </ArrowStyle>
        }
        onChange={handleSlideChange}
      >
        {gallery.map((image: StadiumGallery) => {
          return (
            <Box
              key={image.id}
              sx={{
                width: '100%',
                height: '85vh',
              }}
            >
              <SliderImage
                sx={{
                  backgroundImage: `url(${image.image})`,
                }}
              />
            </Box>
          );
        })}
      </Slide>
      <ThumbnailBox
        sx={{
          mt: '5px',
        }}
      >
        {gallery.map((e: StadiumGallery) => (
          <ThumbnailImage
            key={e.id}
            sx={{
              p: '0 20px',
              backgroundImage: `url(${e.image})`,
              scale: e.id === Active ? ' 1.2' : '1',
            }}
          />
        ))}
      </ThumbnailBox>
    </SliderBox>
  );
};

export default ImageSlider;
