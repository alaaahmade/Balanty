import PropTypes from 'prop-types';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { IEvent } from '../pages/CreateMatch';
import { OpenContextValue, MyContextProviderProps } from '../interfaces';
import { open } from './RootLayout';

export const statsContext = createContext<OpenContextValue | any>({});
statsContext.displayName = 'OpenContext';

export const StatsContextProvider = ({ children }: MyContextProviderProps) => {
  const [Stadiums, setStadiums] = useState<OpenContextValue['Stadiums']>([]);
  const [UserId, setUserId] = useState<number>(0);
  const [Details, setDetails] = useState<OpenContextValue['Details']>();
  const [ValidateError, setValidateError] = useState<string>('');
  const [matches, setMatches] = useState<IEvent[]>([]);
  const [Event, setEvent] = useState<IEvent>({
    title: '',
    start: '',
    end: '',
    backgroundColor: '',
  });
  const [match, setMatch] = useState({
    title: '',
    startDate: '',
    endDate: '',
    seats: 0,
    description: '',
    UserId: 0,
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
      UserId: 0,
    });
    setEvent({
      title: '',
      start: '',
      end: '',
      backgroundColor: '',
    });
    setValidateError('');
  }, [openPage]);

  useEffect(() => {
    setMatch(prv => ({ ...prv, startDate: Event.start, endDate: Event.end }));
  }, [Event]);

  const values = useMemo(
    () => ({
      Stadiums,
      setStadiums,
      UserId,
      setUserId,
      Details,
      setDetails,
      ValidateError,
      setValidateError,
      matches,
      setMatches,
      Event,
      setEvent,
      match,
      setMatch,
    }),
    [Stadiums, matches, Event, match, ValidateError, Details, UserId],
  );

  return (
    <statsContext.Provider value={values}>{children}</statsContext.Provider>
  );
};
StatsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
