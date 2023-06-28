import { ChangeEvent, FC, ReactElement, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';
import { EditGalleryPopupProps } from '../../interfaces';

import {
  DialogContentBox,
  GalleryAction,
  InputLabel,
  SelectBox,
  SelectButtonsBox,
  SelectTypography,
} from './StadiumProfile.styled';

const EditGalleryPopup: FC<EditGalleryPopupProps> = ({
  editGallery,
  setEditGallery,
}): ReactElement => {
  const [newImage, setNewImage] = useState<string>('');
  const [newFile, setNewFile] = useState<File>();

  const handleClose = () => {
    setNewImage('');
    setEditGallery(false);
  };
  const presetKey = 'ry6frp8c';
  const cloudName = 'dtpbcx2kv';

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', presetKey);
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData,
    );
    console.log(data.secure_url);
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

      setNewFile(files[0]);
    }
  };

  const handleSave = async () => {
    await uploadImage(newFile as File);
    setEditGallery(false);
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
        <DialogContentBox>
          <InputLabel htmlFor="input">
            <SelectBox
              sx={{
                mt: '10px',
                backgroundImage: `url(${newImage})`,
              }}
            >
              <SelectTypography>اختيار صورة جديدة</SelectTypography>
            </SelectBox>
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
          </InputLabel>
        </DialogContentBox>
        <DialogActions>
          <SelectButtonsBox
            sx={{
              mb: '10px',
            }}
          >
            <GalleryAction onClick={handleClose}>الغاء</GalleryAction>
            <GalleryAction onClick={handleClose}>
              اضافة كصورة جديدة
            </GalleryAction>
            <GalleryAction onClick={handleSave}>حفظ</GalleryAction>
          </SelectButtonsBox>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditGalleryPopup;
