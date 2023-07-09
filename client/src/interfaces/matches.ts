export interface Player {
  id: number;
  avatar: string;
  age: number;
  position: string;
  cover: string;
  bio: string;
}

export interface Match {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  seats: number;
  stadiumMatch: {
    username: string;
    Stadium: {
      stadiumGallery: {
        image: string;
      }[];
    };
  };
  ownerUser: {
    username: string;
  };
  Players: Player[];
}
export interface MatchCardProps {
  match: Match;
}
