import React, {
  FC,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';
import { ChildrenProps, Match } from '../interfaces';
import { matchesContextTypes } from '../interfaces/matches';

export const MatchesContext = createContext<matchesContextTypes>(
  {} as matchesContextTypes,
);

export const MyMatchesProvider: FC<ChildrenProps> = ({ children }) => {
  const [myMatches, setMyMatches] = useState<Match[]>([]);

  const getMyMatches = useCallback(async () => {
    const response = await axios('/api/v1/matches/my-matches');
    setMyMatches(response.data.data);
  }, []);

  const myMatchesValue = useMemo(
    () => ({ getMyMatches, myMatches }),
    [getMyMatches, myMatches],
  );

  return (
    <MatchesContext.Provider value={myMatchesValue}>
      {children}
    </MatchesContext.Provider>
  );
};
