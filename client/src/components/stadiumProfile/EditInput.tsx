import { Edit } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const isEditable = true;

interface Props {
  lastValue: string | number;
  multiline: boolean;
}

const EditInput: React.FC<Props> = ({ lastValue, multiline }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [value, setValue] = useState(lastValue);
  const [hov, setHove] = useState(false);

  const handleMouseOver = () => {
    if (!mouseOver) {
      setMouseOver(true);
    }
    setHove(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleMouseOut = () => {
    if (mouseOver) {
      setMouseOver(false);
    }
    setHove(false);
  };

  const handleClick = () => {
    setEditMode(true);
    setMouseOver(false);
  };

  const handleUpdate = async () => {
    setEditMode(false);
  };

  return (
    <>
      {editMode ? <Button onClick={handleUpdate}>Save</Button> : null}

      <TextField
        name="text"
        value={value}
        margin="normal"
        onChange={onChange}
        disabled={!editMode}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        variant="standard"
        multiline={multiline}
        sx={{
          '& input': {
            color: 'blue',
            textAlign: 'right',
          },
          width: '90%',
          mr: '10px',

          '& .css-66dh3a-MuiInputBase-input-MuiInput-input.Mui-disabled': {
            color: 'red',
            '-webkit-text-fill-color': '#01031C',
          },
          '& .css-1x51dt5-MuiInputBase-input-MuiInput-input.Mui-disabled': {
            '-webkit-text-fill-color': '#01031C',
          },
        }}
        InputProps={{
          disableUnderline: true,
          startAdornment: hov && (
            <InputAdornment position="end">
              {isEditable && (
                <IconButton onClick={handleClick}>
                  <Edit />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default EditInput;
