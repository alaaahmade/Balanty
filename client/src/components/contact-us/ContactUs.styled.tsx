import { Box } from '@mui/system';
import {
  Container,
  Typography,
  TextField,
  Button,
  styled,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '130px',
  textAlign: 'right',
});

export const StyledBox = styled(Box)`
  background-color: #f6f6f5;
  box-sizing: border-box;
  width: 426px;
  padding: 20px;
  margin-top: 10px;
`;

export const StyledTypographyContact = styled(Typography)`
  font-size: 25px;
  padding-bottom: 8px;
  font-weight: bold;
`;

export const StyledTextField = styled(TextField)`
  label {
    text-align: right;
    right: 25px;
  }
  text-align: rtl;
  direction: rtl;
  margin-top: 55px;
  background-color: #fffffe;
  color: grey;
`;

export const StyledButtonContact = styled(Button)`
  background-color: #2cb674;
  width: 100%;
  margin-top: 20px;
  padding: 5px;
  &:hover {
    background-color: #00a871;
  }
`;

export const StyledEmailIcon = styled(EmailIcon)`
  margin-right: 15px;
  color: #2cb674;
  margin-left: 15px;
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
  margin-right: 15px;
  color: #2cb674;
  margin-left: 15px;
`;
