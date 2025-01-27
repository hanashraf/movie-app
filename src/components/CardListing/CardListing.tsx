import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./CardListing.module.scss";
import { HeartIcon } from "lucide-react";
import TCardListing from "@/types/CardListing";
import TCardListingProps from "@/types/CardListingProps";

const CardListing: React.FC<TCardListingProps & { loading: boolean }> = ({
  movies,
  text,
  loading,
}) => {
  return (
    <div>
      <h2 style={{ paddingLeft: 40 }}>{text}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          250: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
      >
        {loading
          ? [...Array(4)].map((_, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.movieCard}>
                  <div className={styles.skeletonImage} />
                  <div>
                    <div className={styles.skeletonText} />
                    <div className={styles.skeletonText} />
                    <div className={styles.skeletonButton} />
                  </div>
                </div>
              </SwiperSlide>
            ))
          : movies.map((movie: TCardListing) => (
              <SwiperSlide key={movie.id} className={styles.swiperSlide}>
                <div className={styles.movieCard}>
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/placeholder.png"
                    }
                    alt={movie.title}
                    width={200}
                    height={300}
                    className={styles.movieImage}
                  />
                  <div>
                    <h3 className={styles.movieTitle}>{movie.title}</h3>
                    <p className={styles.movieRating}>
                      ⭐ {movie.vote_average}
                    </p>
                    <button className={styles.watchlistButton}>
                      Watchlist
                    </button>
                    <HeartIcon className={styles.heartIconStyling} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default CardListing;
