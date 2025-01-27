"use client";
import CardListing from "@/components/CardListing/CardListing";
import TCardListing from "@/types/CardListing";
import {
  BASE_NOW_PLAYING_URL,
  BASE_TOP_RATED_URL,
  BASE_UPCOMING_URL,
} from "@/constant/endpointsUrl";
import useFetchMovies from "@/customHooks/useFetchMovies";
import { useState } from "react";

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<TCardListing[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<TCardListing[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<TCardListing[]>([]);

  const { loading: nowPlayingLoading } = useFetchMovies(
    BASE_NOW_PLAYING_URL,
    setNowPlayingMovies
  );
  const { loading: topRatedLoading } = useFetchMovies(
    BASE_TOP_RATED_URL,
    setTopRatedMovies
  );
  const { loading: upcomingLoading } = useFetchMovies(
    BASE_UPCOMING_URL,
    setUpcomingMovies
  );

  return (
    <>
      <CardListing
        movies={nowPlayingMovies}
        text="Now Playing"
        loading={nowPlayingLoading}
      />
      <CardListing
        movies={topRatedMovies}
        text="Top Rated"
        loading={topRatedLoading}
      />
      <CardListing
        movies={upcomingMovies}
        text="Upcoming"
        loading={upcomingLoading}
      />
    </>
  );
};

export default Home;
