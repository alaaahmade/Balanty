import React, { FC, useContext } from 'react';

import axios from 'axios';

import { TextField, Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import {
  CreateMatchButtons,
  DialogInputsBox,
  StyledAutocomplete,
  CreateMatchImg,
} from '../createMatchStyled';
import { StyledSearchInput } from '../styledRootComponent';
import MatchSchema from '../../validation/MatchSchema';
import { statsContext } from '../../context/CreateMatch';
import { StyledButton } from '../styledRootComponent/SideComponents';

import { CreateMatchFormProps } from '../../interfaces/matchInterface';
import { Option, createMatchError, prevInterface } from '../../interfaces';

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

  const navigate = useNavigate();

  const fetchEvent = async (matchData: prevInterface) => {
    try {
      await axios.post('/api/v1/matches', matchData);
      handleClose();
    } catch (error) {
      if ((error as createMatchError).response.status === 401) {
        setValidateError((error as createMatchError).response.data.data);
      } else {
        navigate('/serverError');
      }
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
      try {
        const { data } = await axios.get(
          `/api/v1/stadiums/details/${selectedValue?.id}`,
        );
        const stadDetails = data.data[0];
        setDetails(stadDetails.image);
        setValidateError('');
      } catch (error) {
        navigate('/serverError');
      }
    }
  };

  return (
    <DialogInputsBox>
      <StyledSearchInput
        sx={{
          mt: '25px',
          width: '80%',
          border: '1px solid #ccc',
          backgroundColor: theme => theme.palette.primary.grayColor,
        }}
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
          backgroundColor: theme => theme.palette.primary.grayColor,
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
          backgroundColor: theme => theme.palette.primary.grayColor,
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
        onChange={handleDescription}
      />
      <StyledAutocomplete
        sx={{
          backgroundColor: theme => theme.palette.primary.grayColor,
        }}
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
