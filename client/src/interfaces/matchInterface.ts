import { Dispatch, Key, ReactNode, SetStateAction } from 'react';
import { Socket } from 'socket.io-client';
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
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
}

export interface MyContextProviderProps {
  children: ReactNode;
}

export interface CreateMatchFormProps {
  setOpen: (newValue: boolean) => void;
}

export interface IMatchMessage {
  id: Key | null | undefined;
  UserId: number;
  MatchId: number;
  message: string;
  updatedAt: string;
  createdAt: string;
  User: {
    email: string;
    id: number;
    phone: string;
    role: string;
    username: string;
    updatedAt: string;
    createdAt: string;
    Player?: {
      UserId: number;
      avatar: string;
      age: number;
      position: string;
      cover: string;
      bio: string;
    } | null;
    Stadium?: {
      user_id: number;
      address: string;
      description: string;
      price: number;
      ground: string;
    } | null;
  };
}

export interface IMessageData {
  status: number;
  data: {
    message: string;
    newMessage?: IMatchMessage;
  };
}
export interface IMatchDataProps {
  status: number;
  data: {
    match: {
      MatchMessages: IMatchMessage[];
      createdAt: string;
      description: string;
      endDate: string;
      id: number;
      ownerId: number;
      seats: number;
      stadiumId: number;
      startDate: string;
      title: string;
      updatedAt: string;
    };
  };
}

export interface IMessageProps {
  id: Key | null | undefined;
  senderId: number;
  message: string;
  senderName: string | number;
  senderAvatar: string | null;
  isReceived: boolean;
  role: string | undefined;
  socket: Socket;
  matchMessages: IMatchMessage[];
  setMatchMessages: Dispatch<SetStateAction<IMatchMessage[]>>;
}
