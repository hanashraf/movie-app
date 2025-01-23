import TDummyDetails from "@/types/DummyData";

const KEY = "6dcfeb8f";
export const BASE_URL = `https://www.omdbapi.com/?apikey=${KEY}`;

export const dummyDetails: TDummyDetails = {
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
  Director: "James Gunn",
  Plot: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
};
