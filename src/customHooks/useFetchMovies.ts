import { useEffect } from "react";
import TCardListing from "@/types/CardListing";
import { OPTIONS } from "@/constant/endpointsUrl";

const useFetchMovies = (
  url: string,
  setMovies: React.Dispatch<React.SetStateAction<TCardListing[]>>
) => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url, OPTIONS);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [url, setMovies]);
};

export default useFetchMovies;
