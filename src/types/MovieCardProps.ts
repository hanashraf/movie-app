import { TMovie } from "@/types/Movies";

type TMovieCardProps = {
  movie: TMovie;
  addFavorite: (movie: TMovie) => void;
  removeFavorite: (movie: TMovie) => void;
  isFavorite: boolean;
  onClick: () => void;
};
export default TMovieCardProps;
