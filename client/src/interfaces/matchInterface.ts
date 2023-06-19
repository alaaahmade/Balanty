import { Dispatch, SetStateAction } from 'react';

export interface Option {
  id: number;
  username: string;
}

export interface createMatchInterface {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
