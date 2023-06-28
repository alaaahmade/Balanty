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
  const HandleAgree = async () => {
    try {
      await axios.get(`/api/v1/gallery/${ImageId}/${StadiumId}`);
      handleClose();
    } catch (error) {
      console.log(error);
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
