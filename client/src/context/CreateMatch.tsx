import PropTypes from 'prop-types';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { IEvent } from '../pages/CreateMatch';
import { OpenContextValue, MyContextProviderProps } from '../interfaces';
import { open } from './RootLayout';

export const statsContext = createContext<OpenContextValue>(
  {} as OpenContextValue,
);
statsContext.displayName = 'OpenContext';

export const StatsContextProvider = ({ children }: MyContextProviderProps) => {
  const [Stadiums, setStadiums] = useState<OpenContextValue['Stadiums']>([]);
  const [StadiumId, setStadiumId] = useState<number>(0);
  const [Details, setDetails] = useState<string>();
  const [date, setDate] = useState<string>('');
  const [ValidateError, setValidateError] = useState<string>('');
  const [matches, setMatches] = useState<IEvent[]>([]);
  const [Event, setEvent] = useState<IEvent>({
    UserId: 0,
    Seats: 0,
    description: '',
    backgroundColor: '#000',
    title: '',
    start: '',
    end: '',
  });
  const [match, setMatch] = useState({
    title: '',
    startDate: '',
    endDate: '',
    seats: 0,
    description: '',
    StadiumId: 0,
  });
  const contextValue = useContext(open);
  const { openPage } = contextValue;

  useEffect(() => {
    setMatch({
      title: '',
      startDate: '',
      endDate: '',
      seats: 0,
      description: '',
      StadiumId: 0,
    });
    setEvent({
      UserId: 0,
      Seats: 0,
      description: '',
      backgroundColor: '#2CB674',
      title: '',
      start: '',
      end: '',
    });
    setMatches([]);
    setValidateError('');
    setDetails('');
    setDate('');
  }, [openPage]);
  useEffect(() => {
    setEvent({
      UserId: 0,
      Seats: 0,
      description: '',
      backgroundColor: '#2CB674',
      title: '',
      start: '',
      end: '',
    });
  }, [StadiumId]);

  useEffect(() => {
    setMatch(prv => ({ ...prv, startDate: Event.start, endDate: Event.end }));
  }, [Event]);

  const values = useMemo(
    () => ({
      Stadiums,
      setStadiums,
      StadiumId,
      setStadiumId,
      Details: Details || '',
      setDetails: setDetails as React.Dispatch<React.SetStateAction<string>>,
      ValidateError,
      setValidateError,
      matches,
      setMatches,
      Event,
      setEvent,
      match,
      setMatch,
      date,
      setDate,
    }),
    [Stadiums, matches, Event, match, ValidateError, Details, StadiumId],
  );

  return (
    <statsContext.Provider value={values}>{children}</statsContext.Provider>
  );
};
StatsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
