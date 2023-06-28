import {
  ChangeEvent,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';

import { EditGalleryPopupProps } from '../../interfaces';

import { GalleryAction } from './StadiumProfile.styled';

const EditGalleryPopup: FC<EditGalleryPopupProps> = ({
  editGallery,
  setEditGallery,
}): ReactElement => {
  const [newImage, setNewImage] = useState('');

  const handleClose = () => {
    setNewImage('');
    setEditGallery(false);
  };
  const selectNewImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      let uploadedImage = '';
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        uploadedImage = reader.result as string;
        setNewImage(uploadedImage);
      });
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div>
      <Dialog open={editGallery} onClose={handleClose}>
        <DialogTitle
          sx={{
            textAlign: 'right',
            color: '#4c8942',
            mr: '32px',
          }}
        >
          اضافة صورة جديدة
        </DialogTitle>
        <DialogContent
          sx={{
            width: '550px',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <label
            style={{
              position: 'absolute',
              top: '46%',
              left: '50%',
              translate: '-50% -50%',
              padding: 0,
              borderRadius: 0,
              cursor: 'pointer',
              color: '#152c11',
            }}
            htmlFor="input"
          >
            <Box
              sx={{
                mt: '10px',
                width: '500px',
                height: '280px',
                border: '2px dashed #ccc',
                borderRadius: '5px',
                backgroundImage: `url(${newImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                position: 'relative',
              }}
            >
              <Typography
                sx={{
                  width: 'fit-content',
                  borderBottom: '1px solid #152c11',
                  position: 'absolute',
                  top: '50%',
                  translate: '-50% -50%',
                  left: '50%',
                }}
              >
                اختيار صورة جديدة
              </Typography>
              {/* {newImage && (
                <img
                  style={{
                    width: '100%',
                    height: '100%',

                  }}
                  alt="newImage"
                  src={newImage}
                />
              )} */}
            </Box>
            <input
              id="input"
              style={{
                display: 'none',
              }}
              type="file"
              accept="image/*"
              multiple
              onChange={selectNewImage}
            />
          </label>
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              mb: '10px',
            }}
          >
            <GalleryAction onClick={handleClose}>الغاء</GalleryAction>
            <GalleryAction onClick={handleClose}>
              اضافة كصورة جديدة
            </GalleryAction>
            <GalleryAction onClick={handleClose}>حفظ</GalleryAction>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditGalleryPopup;
