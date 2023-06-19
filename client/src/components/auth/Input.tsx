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
      <FormControl sx={{ width: '45ch' }}>
        <OutlinedInput
          className="outline-input"
          sx={{
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2cb674',
            },
            '& input': {
              height: '0.8em', // Adjust the height value as needed
              caretColor: '#2cb674',
            },
          }}
          type={type}
          placeholder={placeholder}
        />
      </FormControl>
    </div>
  );
};

export default InputWrap;
