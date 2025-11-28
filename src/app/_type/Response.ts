import { MovieProps } from "./MovieSectionProps";

export type Response = {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
};