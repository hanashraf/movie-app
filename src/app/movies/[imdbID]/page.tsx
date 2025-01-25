import Image from "next/image";
import EmptyState from "@/components/EmptyState/EmptyState";
import styles from "../MovieDetails.module.scss";
import axios from "axios";
import { BASE_URL } from "@/constant/endpointsUrl";
import BackIcon from "@/components/BackIcon/BackIcon";
import { dummyDetails } from "@/constant/endpointsUrl";
import { TMovie } from "@/types/Movies";
import Link from "next/link";
import ErrorState from "@/components/ErrorState/ErrorState";

// Fetch movie details from the API
async function getMovieDetails(
  imdbID: string
): Promise<{ movie: TMovie | null; error?: string }> {
  try {
    const response = await axios.get(`${BASE_URL}&i=${imdbID}`);
    return response.data.Response === "True"
      ? { movie: response.data }
      : { movie: null, error: "Movie not found" };
  } catch (error) {
    return {
      movie: null,
      error: (error as Error).message || "Something went wrong",
    };
  }
}

interface MovieDetailsProps {
  params: { imdbID: string };
}

export default async function MovieDetails({ params }: MovieDetailsProps) {
  const { imdbID } = params;
  const { movie, error } = await getMovieDetails(imdbID);

  if (error) return <ErrorState errorType={error} />;

  if (!movie) return <EmptyState />;

  return (
    <div className={styles.container}>
      <BackIcon />
      <div className={styles.movieDetails}>
        {movie && (
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
            alt={movie.Title}
            width={250}
            height={350}
            priority
            className={styles.poster}
          />
        )}
        {movie && (
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
        )}
      </div>
    </div>
  );
}
