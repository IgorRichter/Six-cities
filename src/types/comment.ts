type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type UserComment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type PostComment = {
  id: string;
  comment: {
    review: string;
    rating: number;
  };
}
