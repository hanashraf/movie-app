"use client";
import useFavouriteStore from "@/stores/FavouritesStore";
import MovieList from "@/components/MovieList/MovieList";
import EmptyFavourites from "@/components/EmptyFavourites/EmptyFavourites";
import BackIcon from "@/components/BackIcon/BackIcon";

const Favourites = () => {
  const favorites = useFavouriteStore((state) => state.favorites);

  if (favorites.length === 0) {
    return <EmptyFavourites />;
  }
  return (
    <>
      <BackIcon />
      <MovieList renderMovies={favorites} />
    </>
  );
};

export default Favourites;
