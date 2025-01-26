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

  useFetchMovies(BASE_NOW_PLAYING_URL, setNowPlayingMovies);
  useFetchMovies(BASE_TOP_RATED_URL, setTopRatedMovies);
  useFetchMovies(BASE_UPCOMING_URL, setUpcomingMovies);

  return (
    <>
      <CardListing movies={nowPlayingMovies} text="Now Playing" />
      <CardListing movies={topRatedMovies} text="Top Rated" />
      <CardListing movies={upcomingMovies} text="Upcoming Movies" />
    </>
  );
};

export default Home;
