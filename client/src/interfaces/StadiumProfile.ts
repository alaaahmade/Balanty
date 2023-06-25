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
