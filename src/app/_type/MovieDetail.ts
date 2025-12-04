export interface MovieDetail {
  id: number;
  original_title: string;
  title: string;
  poster_path: string;
  vote_average: number;
  date: string;
  overview: string;
  date_of_birth: string;
  biography: string;
  profile_path: string;
  timezone: string;
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
  Writer: string;
  Stars: string;
}
