"use client";
import useFavouriteStore from "@/stores/FavouritesStore";
import MovieList from "@/components/MovieList/MovieList";
import EmptyFavourites from "@/components/EmptyFavourites/EmptyFavourites";
import BackIcon from "@/components/BackIcon/BackIcon";
import { useRouter } from "next/navigation";

const Favourites = () => {
  const favorites = useFavouriteStore((state) => state.favorites);
  const router = useRouter();

  console.log(favorites.length);

  if (favorites.length === 0) {
    return <EmptyFavourites />;
  }
  return (
    <>
      <button onClick={() => router.back()}>
        <BackIcon />
      </button>
      <MovieList renderMovies={favorites} />
      );
    </>
  );
};

export default Favourites;
