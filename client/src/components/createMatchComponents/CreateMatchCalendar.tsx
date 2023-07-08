import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Alert } from '@mui/material';
import { statsContext } from '../../context/CreateMatch';
import Calendar from '../calender/Calender';
import { StyledFlexBox, StyledTypo } from './createMatchStyled';

const CreateMatchCalendar = () => {
  const { ValidateError } = useContext(statsContext);

  return (
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        backgroundColor: theme => theme.palette.customColors.backGroundColor,
      }}
    >
      <Box
        sx={{
          width: '90%',
        }}
      >
        <StyledFlexBox>
          {ValidateError && (
            <Alert
              sx={{
                mt: '85px',
                position: 'absolute',
                left: '0',
              }}
              severity="error"
            >
              {ValidateError}
            </Alert>
          )}
          <StyledTypo
            sx={{
              mt: '105px',
              p: '3px 3px 15px 3px',
            }}
            variant="h5"
          >
            وقت المبارة
          </StyledTypo>
        </StyledFlexBox>
      </Box>
      <Box
        sx={{
          width: '90%',
          height: '450px',
          mt: '90px',
        }}
      >
        <Calendar type="create" />
      </Box>
    </Box>
  );
};

export default CreateMatchCalendar;
