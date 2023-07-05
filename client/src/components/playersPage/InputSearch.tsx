import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface TypeSearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const TypeSearch: React.FC<TypeSearchProps> = ({
  searchValue,
  setSearchValue,
}) => {
  const [showClearIcon, setShowClearIcon] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowClearIcon(true);
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setShowClearIcon(false);
    setSearchValue('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80px',
      }}
    >
      <TextField
        size="small"
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
        sx={{
          borderColor: '#2CB674',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: showClearIcon && (
            <InputAdornment
              position="end"
              onClick={handleClear}
              style={{ cursor: 'pointer' }}
            >
              <ClearIcon style={{ color: '#999' }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default TypeSearch;
