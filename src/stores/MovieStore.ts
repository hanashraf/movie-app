import { create } from "zustand";
import { TMovie } from "../types/Movies";

type TMovieState = {
  movies: TMovie[];
};

type TMovieAction = {
  setMovies: (newMovies: TMovie[]) => void;
};

const useMovieStore = create<TMovieState & TMovieAction>((set) => ({
  movies: [],
  setMovies: (newMovies) => set({ movies: newMovies }),
}));

export default useMovieStore;
