"use client";
import MovieCard from "../MovieCard/MovieCard";
import useFavouriteStore from "@/stores/FavouritesStore";
import { TMovie } from "@/types/Movies";
import { useRouter } from "next/navigation";
import styles from "./MovieList.module.scss";
import TMovieListProps from "@/types/MovieListProps";

function MovieList({ renderMovies }: TMovieListProps) {
  const router = useRouter();

  const favorites = useFavouriteStore((state) => state.favorites);
  const setFavorites = useFavouriteStore((state) => state.setFavorites);

  const saveFavoritesToLocalStorage = (favorites: TMovie[]) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const addFavorite = (movie: TMovie) => {
    const updatedFavorites = [...favorites, movie] as TMovie[];
    saveFavoritesToLocalStorage(updatedFavorites);
    setFavorites(updatedFavorites);
  };

  const removeFavorite = (movie: TMovie) => {
    const updatedFavorites = favorites.filter(
      (m) => m.imdbID !== movie.imdbID
    ) as TMovie[];
    setFavorites(updatedFavorites);

    saveFavoritesToLocalStorage(updatedFavorites);
  };

  return (
    <div className={styles.movieListContainer}>
      {renderMovies.map((movie) => {
        const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

        return (
          <MovieCard
            key={movie.imdbID}
            onClick={() => {
              router.push(`/movies/${movie.imdbID}`);
            }}
            movie={movie}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
