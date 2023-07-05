import { Alert, Stack } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const ErrorAlert: FC<{ errorMessage: string; style: object }> = ({
  errorMessage,
  style,
}): ReactElement => {
  return (
    <Stack
      sx={{
        width: '45%',
        position: 'absolute',
        right: '2rem',
        bottom: '2rem',
        zIndex: '1000',
        direction: 'rtl',
        ...style,
      }}
      spacing={2}
    >
      <Alert severity="error">
        {errorMessage} — <strong>تفحصه!</strong>
      </Alert>
    </Stack>
  );
};

export default ErrorAlert;
