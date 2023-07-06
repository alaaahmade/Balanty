import { useNavigate, useParams } from 'react-router-dom';
import { FC, ReactElement, useContext } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';
import { Box } from '@mui/material';
import { deleteDialogProps } from '../../interfaces/StadiumProfile';
import Loader from './Loader';
import { UpdateGalleryContext } from '../../context';

const DeleteDialog: FC<deleteDialogProps> = ({
  handleClose,
  deleteDialog,
  ImageId,
  StadiumId,
  loading,
  setLoading,
}): ReactElement => {
  const { setAgree, Agree } = useContext(UpdateGalleryContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const HandleAgree = async () => {
    try {
      setAgree(!Agree);
      setLoading(true);
      await axios.delete(
        `/api/v1/stadiums/gallery/${ImageId}/${StadiumId}/${id}`,
      );
      handleClose();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      navigate('/serverError');
    }
  };
  return (
    <Box>
      <Dialog
        open={deleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {loading && <Loader />}

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
    </Box>
  );
};

export default DeleteDialog;
