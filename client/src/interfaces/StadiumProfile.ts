import { Dispatch, SetStateAction } from 'react';

export interface StadiumGallery {
  id: number;
  image: string;
}

export interface StadiumProfileProps {
  gallery: StadiumGallery[];
}
export interface Stadium {
  id: number;
  address: string;
  description: string;
  price: number;
  ground: string;
  UserId: number;
  stadiumGallery: StadiumGallery[];
}

export interface UserData {
  username: string;
  phone: string;
  id: number;
  Stadium: Stadium;
}

export interface errorI {
  response: { status: number; data: object };
}

export interface createMatchError {
  response: { status: number; data: { data: string } };
}

export interface Props {
  lastValue: string | number;
  multiline: boolean;
  name: string;
  editMode: boolean;
  setNewData: Dispatch<SetStateAction<object>>;
}

export interface updatedValue {
  description?: string;
  phone?: string;
  price?: number;
  ground?: string;
  address?: string;
}

export interface updatedValueError {
  response: {
    status: number;
    data: { data: { status: number; message: string } };
  };
}

export interface BioSectionProps {
  userData: UserData;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  editMode: boolean;
}
