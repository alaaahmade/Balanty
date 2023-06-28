import { Dispatch, SetStateAction } from 'react';

export interface Props {
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
  address?: string;
}

export interface updatedValueError {
  response: {
    status: number;
    data: { data: { status: number; message: string } };
  };
}

export interface Player {
  id: number;
  address: string;
  bio: string;
  age: number;
  position: string;
  UserId: number;
}

export interface UserData {
  username: string;
  phone: string;
  id: number;
  Player: Player;
}

export interface profileInfoProps {
  userData: UserData;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  editMode: boolean;
}
