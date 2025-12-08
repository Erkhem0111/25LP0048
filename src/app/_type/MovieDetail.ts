export type MovieDetail = {
  id: number;
  adult: boolean;
  original_title: string;
  title: string;
  poster_path: string;
  vote_average: number;
  date: string;
  overview: string;
  date_of_birth: string;
  profile_path: string;
  birthday: string;
  release_date: string;
  runtime: number;
  views: number;
  videos: {
    results: {
      key: string;
    }[];
  };
  vote_count: number;
  image: string;
  genres: { name: string }[];
  director: string;
  cast: { name: string }[];
  crew: { name: string }[];
  movie: string;
};
