import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Alert, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CheckCircleOutline } from '@mui/icons-material';
import imgContact from '../../assets/imgContact.svg';
import {
  StyledContainer,
  StyledBox,
  StyledTypographyContact,
  StyledTextField,
  StyledButtonContact,
  StyledEmailIcon,
  StyledPhoneIcon,
} from '../index';

interface ContactFormData {
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isNoData, setIsNoData] = useState<boolean>(false);

  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    message: '',
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (formData.email && formData.message) {
      setFormData({
        email: '',
        message: '',
      });
      setIsSent(true);
      setIsNoData(false);
    } else {
      setIsNoData(true);
    }
  };

  setTimeout(() => {
    if (isSent) {
      setIsSent(false);
    }
  }, 3000);

  setTimeout(() => {
    if (isNoData) {
      setIsNoData(false);
    }
  }, 3000);

  return (
    <StyledContainer id="contactUs">
      <StyledBox>
        <StyledTypographyContact variant="h2">
          تواصل معنا
        </StyledTypographyContact>
        <Typography variant="body1">نحن نساعدك؟ كيف تحتاج مساعدة</Typography>
        <form onSubmit={handleFormSubmit}>
          <StyledTextField
            type="email"
            id="email"
            name="email"
            label="البريد الإلكتروني"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <StyledTextField
            id="message"
            name="message"
            label="اضف رسالتك"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <StyledButtonContact type="submit" variant="contained">
            تواصل معنا
          </StyledButtonContact>
        </form>
      </StyledBox>
      <Box>
        <img src={imgContact} alt="" />
        <div>
          <Box sx={{ display: 'flex' }}>
            <StyledEmailIcon />
            <Typography variant="body1">palanty@gmail.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingTop: '18px' }}>
            <StyledPhoneIcon />
            <Typography variant="body1">01234890</Typography>
          </Box>
        </div>
      </Box>
      {isSent && (
        <Alert
          sx={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '40%',
          }}
          icon={<CheckCircleOutline fontSize="inherit" />}
          severity="success"
        >
          Your Message Sent Successfully!
        </Alert>
      )}
      {isNoData && (
        <Alert
          severity="error"
          sx={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '40%',
          }}
        >
          Please Fill The Text Fields Before Sending
        </Alert>
      )}
    </StyledContainer>
  );
};
export default Contact;
