export interface StadiumDataProps {
  id: number;
  username: string;
  Stadium: {
    id: number;
    address: string;
    description: string;
    price: number;
    ground: string;
    UserId: number;
    stadiumGallery: {
      id: number;
      StadiumId: number;
      image: string;
    }[];
  };
  StadiumsReviews: { value: number }[];
}
