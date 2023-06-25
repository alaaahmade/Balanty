import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FC, useEffect, useState } from 'react';
import {
  ArrowStyle,
  SliderBox,
  SliderImage,
  ThumbnailBox,
  ThumbnailImage,
} from './StadiumProfile.styled';
import { galleryTypes } from '../../interfaces/StadiumProfile';

const ImageSlider: FC<galleryTypes> = ({ gallery }) => {
  const [Active, setActive] = useState(0);
  const [Images, setImages] = useState([
    { id: 1, url: '' },
    { id: 2, url: '' },
    { id: 3, url: '' },
    { id: 4, url: '' },
  ]);

  useEffect(() => {
    if (gallery) {
      setImages([
        { id: 1, url: gallery.image1 },
        { id: 2, url: gallery.image2 },
        { id: 3, url: gallery.image3 },
        { id: 4, url: gallery.image4 },
      ]);
    }
  }, [gallery]);
  const handleSlideChange = (currentSlide: number, e: number) => {
    const { id } = Images[e];
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
        {Images.map(image => {
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
                  backgroundImage: `url(${image.url})`,
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
        {Images.map(e => (
          <ThumbnailImage
            key={e.id}
            sx={{
              p: '0 20px',
              backgroundImage: `url(${e.url})`,
              scale: e.id === Active ? ' 1.2' : '1',
            }}
          />
        ))}
      </ThumbnailBox>
    </SliderBox>
  );
};

export default ImageSlider;
