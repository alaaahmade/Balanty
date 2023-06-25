export interface StadiumGallery {
  id: number;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  createdAt: string;
  updatedAt: string;
  StadiumId: number;
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

export interface galleryTypes {
  gallery: {
    id: number;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  };
}
