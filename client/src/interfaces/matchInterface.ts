import { Dispatch, SetStateAction } from 'react';
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
    UserId: number;
    title: string;
    startDate: string;
    endDate: string;
    seats: number;
    description: string;
  };
  setEvent: Dispatch<
    SetStateAction<{
      UserId: number;
      title: string;
      startDate: string;
      endDate: string;
      seats: number;
      description: string;
    }>
  >;
}

export interface prevInterface {
  UserId: number;
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
  openPage?: boolean;
  updateOpen?: (newValue: boolean) => void;
}

export interface OpenContextValue2 {
  Stadiums: any[];
  setStadiums: React.Dispatch<React.SetStateAction<any[]>>;
  UserId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  Details: any;
  setDetails: React.Dispatch<React.SetStateAction<any>>;
  ValidateError: string;
  setValidateError: React.Dispatch<React.SetStateAction<string>>;
  matches: IEvent[];
  setMatches: React.Dispatch<React.SetStateAction<IEvent[]>>;
  Event: IEvent;
  setEvent: React.Dispatch<React.SetStateAction<IEvent>>;
  match: prevInterface;
  setMatch: React.Dispatch<React.SetStateAction<prevInterface>>;
}
