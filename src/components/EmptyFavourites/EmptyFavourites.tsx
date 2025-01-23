import React from "react";
import styles from "./EmptyFavourites.module.scss";
import Image from "next/image";
const EmptyFavourites = () => {
  return (
    <div className={styles.emptyFavourites}>
      <Image src="/EmptyState.png" alt="Empty-image" width={75} height={75} />
      <div>No Movies Found</div>
      <div>Add movies to your favourites.</div>
    </div>
  );
};

export default EmptyFavourites;
