import { Dispatch, SetStateAction } from 'react';

export interface playerBackgroundProps {
  avatar: string;
  cover: string;
  playerId: number;
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

export interface profileInfoProps {
  age: number;
  position: string;
  bio: string;
  phone: number;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  editMode: boolean;
  EditAble: boolean;
  fetchData: (Id: string) => Promise<void>;
}

export interface playerActionsProps {
  username: string;
}

export interface error {
  response: { status: number; data: object };
}
