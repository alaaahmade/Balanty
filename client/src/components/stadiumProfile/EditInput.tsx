import { ReactElement, useEffect, useState } from 'react';
import { EditInputs } from './StadiumProfile.styled';
import { props, updatedValue } from '../../interfaces/PLayerProfile';

const EditInput: React.FC<props> = ({
  lastValue,
  multiline,
  editMode,
  name,
  setNewData,
}: props): ReactElement => {
  const [value, setValue] = useState(lastValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const key = e.target.name;
    setNewData((prev: updatedValue) => {
      return { ...prev, [key]: e.target.value };
    });
  };

  useEffect(() => {
    setValue(lastValue);
  }, [editMode, lastValue]);

  return (
    <EditInputs
      name={name}
      value={value}
      margin="normal"
      onChange={onChange}
      disabled={!editMode}
      variant="standard"
      multiline={multiline}
      sx={{
        textAlign: 'right',
        direction: 'right',
      }}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};

export default EditInput;
