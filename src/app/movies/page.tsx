"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "@/components/MovieList/MovieList";
import { BASE_URL } from "../../constant/endpointsUrl";
import EmptyState from "@/components/EmptyState/EmptyState";
import ErrorState from "@/components/ErrorState/ErrorState";
import Loading from "@/components/Loading/Loading";
import useMovieStore from "@/stores/MovieStore";
import useQueryStore from "@/stores/QueryStore";

const Movies = () => {
  const movies = useMovieStore((state) => state.movies);
  const setMovies = useMovieStore((state) => state.setMovies);
  const query = useQueryStore((state) => state.query);

  const [isLoading, setIsLoading] = useState(false);
  const [isErrorState, setIsErrorState] = useState(false);
  const [isEmptyState, setIsEmptyState] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchMovies = async (query: string) => {
      setIsLoading(true);
      setIsErrorState(false);
      setIsEmptyState(false);
      try {
        if (!query.trim()) {
          setIsEmptyState(true);
          setMovies([]);
          setIsLoading(false);
          return;
        }

        const response = await axios.get(`${BASE_URL}&s=${query}`);

        if (response.data.Response === "True") {
          setMovies(response.data.Search);
          setIsEmptyState(false);
          setIsLoading(false);
        } else {
          setIsEmptyState(true);
          setMovies([]);
          setIsLoading(false);
        }
      } catch (error) {
        if (error instanceof Error) {
          setIsErrorState(true);
          setErrorMessage(error.message);
        }
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies(query);
  }, [query, setMovies]);

  if (isLoading) return <Loading />;
  if (isErrorState) return <ErrorState errorType={errorMessage} />;
  if (isEmptyState) return <EmptyState />;
  return <MovieList renderMovies={movies} />;
};

export default Movies;
