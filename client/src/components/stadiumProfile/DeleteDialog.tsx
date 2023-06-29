import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';
import { deleteDialogProps } from '../../interfaces/StadiumProfile';

const DeleteDialog: FC<deleteDialogProps> = ({
  handleClose,
  deleteDialog,
  ImageId,
  StadiumId,
}) => {
  const navigate = useNavigate();

  const HandleAgree = async () => {
    try {
      await axios.delete(`/api/v1/stadiums/gallery/${ImageId}/${StadiumId}`);
      handleClose();
    } catch (error) {
      navigate('/serverError');
    }
  };
  return (
    <div>
      <Dialog
        open={deleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{
            textAlign: 'right',
          }}
          id="alert-dialog-title"
        >
          هل انت متأكد من أنك تريد حذف هذه الصورة؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              textAlign: 'right',
            }}
            id="alert-dialog-description"
          >
            بموافقتك على هذه الخطوة سوف يتم حذف هذه الصورة بشكل نهائي من ملفك
            الشخصي
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>الغاء</Button>
          <Button onClick={HandleAgree} autoFocus>
            موافق
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
