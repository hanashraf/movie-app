"use client";
import EmptyState from "@/components/EmptyState/EmptyState";
import Image from "next/image";
import { useState, useEffect } from "react";
import { use } from "react";
import Loading from "@/components/Loading/Loading";
import styles from "../MovieDetails.module.scss";
import axios from "axios";
import { BASE_URL } from "@/constant/endpointsUrl";
import BackIcon from "@/components/BackIcon/BackIcon";
import { useRouter } from "next/navigation";
import { dummyDetails } from "@/constant/endpointsUrl";
import { TMovie } from "@/types/Movies";
import Link from "next/link";

type MovieDetailsProps = {
  params: Promise<{
    imdbID: string;
  }>;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<TMovie | null>(null);
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
      <div onClick={() => router.back()}>
        <BackIcon />
      </div>
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
            <Link
              href={`https://www.imdb.com/title/${movie.imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on IMDb
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
