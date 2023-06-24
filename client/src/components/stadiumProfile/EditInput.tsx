import { Edit } from '@mui/icons-material';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { EditInputs } from './styledStadiumProfile';

interface Props {
  lastValue: string | number;
  multiline: boolean;
}

const EditInput: React.FC<Props> = ({ lastValue, multiline }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [value, setValue] = useState(lastValue);
  const [hov, setHove] = useState(false);
  const [EditAble, setEditAble] = useState(true);

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

      <EditInputs
        name="text"
        value={value}
        margin="normal"
        onChange={onChange}
        disabled={!editMode}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        variant="standard"
        multiline={multiline}
        InputProps={{
          disableUnderline: true,
          startAdornment: hov && (
            <InputAdornment position="end">
              {EditAble && (
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
