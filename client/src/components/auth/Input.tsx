import React, { FC } from 'react';
import { FormControl, OutlinedInput } from '@mui/material';
import { Controller } from 'react-hook-form';
import { InputLabel } from './LoginWrapper.styled';

interface Props {
  type: string;
  label: string;
  placeholder: string;
  errors: any;
  control: any;
  name: string;
}
const InputWrap: FC<Props> = ({
  type,
  label,
  placeholder,
  errors,
  control,
  name,
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <InputLabel>{label}</InputLabel>
      <FormControl sx={{ width: '45ch' }}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
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
              {...field}
              type={type}
              placeholder={placeholder}
              error={!!errors[name]}
            />
          )}
        />
        {errors[name] && (
          <p style={{ color: 'red', margin: '0.5rem 0 0' }}>
            {errors[name]?.message}
          </p>
        )}
      </FormControl>
    </div>
  );
};

export default InputWrap;
