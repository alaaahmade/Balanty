import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import imgContact from '../assets/imgContact.svg';
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

    setFormData({
      email: '',
      message: '',
    });
  };

  return (
    <StyledContainer maxWidth="md">
      <div>
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
            <StyledButtonContact
              type="submit"
              variant="contained"
              color="primary"
            >
              تواصل معنا
            </StyledButtonContact>
          </form>
        </StyledBox>
      </div>
      <div>
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
      </div>
    </StyledContainer>
  );
};
export default Contact;
