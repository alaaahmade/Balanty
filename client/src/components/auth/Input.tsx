import React, { FC } from 'react';
import { FormControl, OutlinedInput } from '@mui/material';
import { InputLabel } from './LoginWrapper.styled';

interface Props {
  type: string;
  label: string;
  placeholder: string;
}
const InputWrap: FC<Props> = ({ type, label, placeholder }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <InputLabel>{label}</InputLabel>
      <FormControl sx={{ width: '30ch' }}>
        <OutlinedInput
          sx={{ borderColor: '#2cb674' }}
          type={type}
          placeholder={placeholder}
        />
      </FormControl>
    </div>
  );
};

export default InputWrap;
