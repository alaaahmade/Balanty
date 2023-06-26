// import { Edit } from '@mui/icons-material';
// import { Button, IconButton, InputAdornment } from '@mui/material';
import { ReactElement, useState } from 'react';
import { EditInputs } from './StadiumProfile.styled';

interface Props {
  lastValue: string | number;
  multiline: boolean;
  editMode: boolean;
}

const EditInput: React.FC<Props> = ({
  lastValue,
  multiline,
  editMode,
}: Props): ReactElement => {
  const [value, setValue] = useState(lastValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <EditInputs
      name="text"
      value={value}
      margin="normal"
      onChange={onChange}
      disabled={!editMode}
      variant="standard"
      multiline={multiline}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};

export default EditInput;
