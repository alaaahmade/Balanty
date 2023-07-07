export interface errorI {
  response: { status: number; data: object };
}
export interface PlayerDataProps {
  id: number;
  username: string;
  Player: {
    id: number;
    avatar: string;
    UserId: number;
  };
}
