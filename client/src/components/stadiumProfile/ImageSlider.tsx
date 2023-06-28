import { FC, ReactElement, useState } from 'react';
import { Slide } from 'react-slideshow-image';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';

import {
  ArrowStyle,
  EditGalleryButton,
  SliderBox,
  SliderImage,
  ThumbnailBox,
  ThumbnailImage,
} from './StadiumProfile.styled';

import {
  StadiumGallery,
  StadiumProfileProps,
} from '../../interfaces/StadiumProfile';

import 'react-slideshow-image/dist/styles.css';
import EditGalleryPopup from './EditGallaryPopup';

const ImageSlider: FC<StadiumProfileProps> = ({ gallery }): ReactElement => {
  const [Active, setActive] = useState(0);
  const [editGallery, setEditGallery] = useState(true);
  const [imageHover, setImageHover] = useState(false);
  const [newImageId, setNewImageId] = useState(0);

  const handleSlideChange = (currentSlide: number, e: number) => {
    const { id } = gallery[e];
    setActive(id);
  };

  const handleAddImage = (id: number) => {
    setNewImageId(id);
    setEditGallery(true);
  };

  return (
    <Box
      sx={{
        mt: '1.5%',
      }}
    >
      <EditGalleryPopup
        editGallery={editGallery}
        setEditGallery={setEditGallery}
        newImageId={newImageId}
      />
      <SliderBox
        sx={{
          ml: '20px',
        }}
      >
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
                  height: '75vh',
                  mt: '6%',
                }}
              >
                <SliderImage
                  sx={{
                    position: 'relative',
                    backgroundImage: `url(${image.image})`,
                  }}
                  onMouseEnter={() => setImageHover(true)}
                  onMouseLeave={() => setImageHover(false)}
                >
                  {imageHover && (
                    <EditGalleryButton onClick={() => handleAddImage(image.id)}>
                      اضافة صورة
                    </EditGalleryButton>
                  )}
                </SliderImage>
              </Box>
            );
          })}
        </Slide>
        <ThumbnailBox
          sx={{
            mt: '5px',
            p: '0 1%',
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
    </Box>
  );
};

export default ImageSlider;
