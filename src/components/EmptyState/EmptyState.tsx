import React from "react";
import styles from "./EmptyState.module.scss";
import Image from "next/image";
const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <Image src="/EmptyState.png" alt="Empty-image" width={75} height={75} />
      <div>No Movies Found</div>
      <div>Try searching for a different movie.</div>
    </div>
  );
};

export default EmptyState;
