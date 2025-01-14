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
  const { query } = useQueryStore();

  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);
  const [emptyState, setEmptyState] = useState(false);

  useEffect(() => {
    const fetchMovies = async (query: string) => {
      setLoading(true);
      setErrorState(false);
      setEmptyState(false);
      try {
        if (!query.trim()) {
          setEmptyState(true);
          setMovies([]);
          setLoading(false);
          return;
        }

        const response = await axios.get(`${BASE_URL}&s=${query}`);

        console.log(`${BASE_URL}&s=${query}`);
        if (response.data.Response === "True") {
          console.log(response.data.Search);
          setMovies(response.data.Search);
          setEmptyState(false);
          setLoading(false);
        } else {
          setEmptyState(true);
          setMovies([]);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setErrorState(true);
        setMovies([]);
      }
    };

    fetchMovies(query);
  }, [query, setMovies]);

  if (loading) return <Loading />;
  if (errorState) return <ErrorState />;
  if (emptyState) return <EmptyState />;

  return <MovieList renderMovies={movies} />;
};

export default Movies;
