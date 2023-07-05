import { Alert, Stack } from '@mui/material';
import React, { FC, ReactElement, CSSProperties } from 'react';

interface ErrorAlertProps {
  errorMessage: string;
  style?: CSSProperties;
}

const defaultProps: Partial<ErrorAlertProps> = {
  style: {},
};
const ErrorAlert: FC<ErrorAlertProps> = ({
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

ErrorAlert.defaultProps = defaultProps;

export default ErrorAlert;
