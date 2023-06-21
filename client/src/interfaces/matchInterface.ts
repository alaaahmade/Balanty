import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IEvent } from '../pages/CreateMatch';

export interface Option {
  id: number;
  username: string;
}
export interface LeftSideBarInterface {
  setOpen: (newValue: boolean) => void;
}

export interface createMatchInterface extends LeftSideBarInterface {
  open: boolean;
}

export interface CalendarProps {
  Event: {
    StadiumId: number;
    title: string;
    startDate: string;
    endDate: string;
    seats: number;
    description: string;
  };
  setEvent: Dispatch<
    SetStateAction<{
      StadiumId: number;
      title: string;
      startDate: string;
      endDate: string;
      seats: number;
      description: string;
    }>
  >;
}

export interface prevInterface {
  StadiumId: number;
  title: string;
  startDate: string;
  endDate: string;
  seats: number;
  description: string;
}

export interface newEventInterface {
  startStr: string;
  endStr: string;
}

export interface OpenContextValue {
  Stadiums: { username: string; id: number }[];
  setStadiums: React.Dispatch<
    React.SetStateAction<{ username: string; id: number }[]>
  >;
  StadiumId: number;
  setStadiumId: React.Dispatch<React.SetStateAction<number>>;
  openPage?: boolean;
  updateOpen?: (newValue: boolean) => void;
  Details: string;
  setDetails: React.Dispatch<React.SetStateAction<string>>;
  ValidateError: string;
  setValidateError: React.Dispatch<React.SetStateAction<string>>;
  matches: IEvent[];
  setMatches: React.Dispatch<React.SetStateAction<IEvent[]>>;
  Event: IEvent;
  setEvent: React.Dispatch<React.SetStateAction<IEvent>>;
  match: prevInterface;
  setMatch: React.Dispatch<React.SetStateAction<prevInterface>>;
}

export interface MyContextProviderProps {
  children: ReactNode;
}

export interface CreateMatchFormProps {
  setOpen: (newValue: boolean) => void;
}
