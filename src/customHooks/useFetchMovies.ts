import { useEffect, useState } from "react";
import TCardListing from "@/types/CardListing";
import { OPTIONS } from "@/constant/endpointsUrl";

const useFetchMovies = (
  url: string,
  setMovies: React.Dispatch<React.SetStateAction<TCardListing[]>>
) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, OPTIONS);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url, setMovies]);

  return { loading };
};

export default useFetchMovies;
