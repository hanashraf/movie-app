import TDummyDetails from "@/types/DummyData";

const KEY = "6dcfeb8f";
export const BASE_URL = `https://www.omdbapi.com/?apikey=${KEY}`;

export const DUMMY_DETAILS: TDummyDetails = {
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
  Director: "James Gunn",
  Plot: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
};

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2ZlYzU2OWQ4NjU1ZjE4YjRiYTYzMDRmODE3MzU1NiIsIm5iZiI6MTczNjYwNjk0My4yNjksInN1YiI6IjY3ODI4NGRmYWJhYmJiYTA0MGJiMjM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GNtvzCRfs2tek_YCSrM_7pR4UVnqHmzLKnZWJ2dCHV8",
  },
};

export const BASE_UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
export const BASE_TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
export const BASE_NOW_PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
