import React, { FC, useContext } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { StyledButton } from '../styledRootComponent/SideComponents';
import {
  CreateMatchButtons,
  DialogInputsBox,
  StyledAutocomplete,
  CreateMatchImg,
} from '../createMatchStyled/createMatchStyled';
import { StyledSearchInput } from '../styledRootComponent/Nav';
import { Option, prevInterface } from '../../interfaces';
import MatchSchema from '../../validation/MatchSchema';
import { statsContext } from '../../context/CreateMatch';
import { CreateMatchFormProps } from '../../interfaces/matchInterface';

const CreateMatchForm: FC<CreateMatchFormProps> = ({ setOpen }) => {
  const states = useContext(statsContext);
  const {
    Stadiums,
    setStadiumId,
    Details,
    setDetails,
    setValidateError,
    match,
    setMatch,
  } = states;
  const getOptionLabel = (Stadium: Option) => Stadium.username;

  const handleClose = () => {
    setOpen(false);
  };
  const handleMatchName = (e: { target: { value: string } }) => {
    setMatch((prev: prevInterface) => ({
      ...prev,
      title: e.target.value,
    }));
    setValidateError('');
  };

  const handlePlayersCount = (e: { target: { value: string } }) => {
    setMatch((prev: prevInterface) => ({
      ...prev,
      seats: +e.target.value,
    }));
    setValidateError('');
  };
  const fetchEvent = async (data: prevInterface) => {
    const matchesFetch = await fetch('/api/v1/matches', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const resultCreate = await matchesFetch.json();
    if (resultCreate.status === 401) {
      setValidateError(resultCreate.data);
    } else if (resultCreate.status === 201) {
      handleClose();
    }
  };
  const HandleCreateEvent = async () => {
    try {
      const result = await MatchSchema.validateSync(match);

      await fetchEvent(result);
      setStadiumId(0);
    } catch (error: unknown) {
      const errorMessage = (error as Error).message || 'An error occurred.';
      setValidateError(errorMessage);
    }
  };

  const handleDescription = (e: { target: { value: string } }) => {
    setMatch((prev: prevInterface) => ({
      ...prev,
      description: e.target.value,
    }));
    setValidateError('');
  };

  const handleAutocompleteChange = async (
    event: React.ChangeEvent<object>,
    // value: Option | null,
    value: Option | unknown,
  ): Promise<void> => {
    if (value) {
      const selectedValue = value as Option;
      setStadiumId(+selectedValue.id);
      setMatch((prev: prevInterface) => ({
        ...prev,
        StadiumId: +selectedValue.id,
      }));
      const data = await fetch(`/api/v1/stadiums/details/${selectedValue?.id}`);
      const stadDetails = await data.json();
      setDetails(stadDetails.data[0].image1);
      setValidateError('');
    }
  };

  return (
    <DialogInputsBox>
      <StyledSearchInput
        sx={{ mt: '25px', width: '80%', border: '1px solid #ccc' }}
        placeholder="عنوان المباراة"
        onChange={handleMatchName}
        disableUnderline
      />
      <StyledSearchInput
        sx={{
          mt: '25px',
          width: '80%',
          p: '20px',
          border: '1px solid #ccc',
        }}
        placeholder="عدد اللاعبين"
        type="number"
        onChange={handlePlayersCount}
        disableUnderline
      />

      <TextField
        InputProps={{
          disableUnderline: true,
          inputProps: {
            style: {
              textAlign: 'right',
              padding: '7px 40px',
            },
          },
        }}
        color="primary"
        variant="standard"
        multiline
        minRows={2}
        placeholder="وصف المباراة"
        sx={{
          width: '80%',
          mt: '25px',
          backgroundColor: '#EDF7FF',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
        onChange={handleDescription}
      />
      <StyledAutocomplete
        disablePortal
        id="combo-box-demo"
        options={Stadiums}
        getOptionLabel={getOptionLabel as (option: unknown) => string}
        onChange={handleAutocompleteChange}
        renderInput={params => (
          <TextField {...params} placeholder="اسم الملعب" />
        )}
      />
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {Details && <CreateMatchImg src={Details} alt="ملعب" />}
      </Box>
      <CreateMatchButtons>
        <StyledButton onClick={handleClose}> الغاء</StyledButton>
        <StyledButton onClick={HandleCreateEvent}>انشاء المباراة</StyledButton>
      </CreateMatchButtons>
    </DialogInputsBox>
  );
};

export default CreateMatchForm;
