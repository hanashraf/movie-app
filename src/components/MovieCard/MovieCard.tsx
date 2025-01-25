"use client";
import React from "react";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
import HeartIcon from "../HeartIcon/HeartIcon";
import { TMovie } from "@/types/Movies";

type MovieCardProps = {
  movie: TMovie;
  addFavorite: (movie: TMovie) => void;
  removeFavorite: (movie: TMovie) => void;
  isFavorite: boolean;
  onClick: () => void;
};

function MovieCard({
  movie,
  addFavorite,
  removeFavorite,
  isFavorite,
  onClick,
}: MovieCardProps) {
  const toggleFavourite = () => {
    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        onClick();
      }}
      role="link"
      tabIndex={0}
    >
      <div className={styles.movieCard}>
        <div>
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
            alt={movie.Title}
            width={200}
            height={200}
            priority
          />
        </div>

        <div className={styles.details}>
          <h3>{movie.Title}</h3>
          <div className={styles.movieTitle}>Type: {movie.Type}</div>
        </div>
        <HeartIcon isFavourite={isFavorite} toggleFavourite={toggleFavourite} />
      </div>
    </div>
  );
}

export default MovieCard;
