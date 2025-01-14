"use client";
import EmptyState from "@/components/EmptyState/EmptyState";
import Image from "next/image";
import { useState, useEffect } from "react";
import { use } from "react";
import Loading from "@/components/Loading/Loading";
import styles from "../../MovieDetails.module.css";
import axios from "axios";
import { BASE_URL } from "@/constant/endpointsUrl";
import BackIcon from "@/components/BackIcon/BackIcon";
import { useRouter } from "next/navigation";

type MovieDetailsProps = {
  params: Promise<{
    imdbID: string;
  }>;
};

type DummyDetails = {
  Actors: string;
  Director: string;
  Plot: string;
};

const dummyDetails: DummyDetails = {
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
  Director: "James Gunn",
  Plot: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const router = useRouter();
  const { imdbID } = use(params);

  useEffect(() => {
    if (imdbID) {
      setIsLoading(false);
    }
  }, [imdbID]);

  const fetchMovieDetails = async (imdbID: string) => {
    setIsLoading(true);
    const response = await axios.get(`${BASE_URL}&i=${imdbID}`);
    if (response.data.Response === "True") {
      setIsLoading(false);
    }
    setMovie(response.data);
  };
  useEffect(() => {
    fetchMovieDetails(imdbID);
  }, [imdbID]);

  if (isLoading) {
    return <Loading />;
  }

  if (!movie) {
    return <EmptyState />;
  }

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()}>
        <BackIcon />
      </button>
      <div className={styles.movieDetails}>
        {movie.Poster !== "N/A" && (
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={250}
            height={350}
            priority
            className={styles.poster}
          />
        )}
        <div className={styles.infoDisplay}>
          <h1>{movie.Title}</h1>
          <p>
            <strong>Type:</strong> {movie.Type}
          </p>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Director:</strong> {dummyDetails.Director}
          </p>
          <p>
            <strong>Actors:</strong> {dummyDetails.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {dummyDetails.Plot}
          </p>
          <p>
            <strong>More Info:</strong>{" "}
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on IMDb
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
