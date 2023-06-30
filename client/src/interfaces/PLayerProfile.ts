import { Dispatch, SetStateAction } from 'react';

export interface playerBackgroundProps {
  avatar: string;
  cover: string;
}

export interface props {
  lastValue: string | number;
  multiline: boolean;
  name: string;
  editMode: boolean;
  setNewData: Dispatch<SetStateAction<object>>;
}

export interface updatedValue {
  bio?: string;
  phone?: string;
  position?: string;
  age?: number;
}

export interface updatedValueError {
  response: {
    status: number;
    data: { data: { status: number; message: string } };
  };
}

export interface player {
  id: number;
  bio: string;
  age: number;
  position: string;
  UserId: number;
}

export interface UserData {
  id: number;
  username: string;
  phone: string;
  player: player;
}

export interface profileInfoProps {
  age: number;
  position: string;
  bio: string;
  phone: number;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  editMode: boolean;
}

export interface playerActionsProps {
  username: string;
}
