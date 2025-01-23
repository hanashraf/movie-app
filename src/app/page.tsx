"use client";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.homeState}>
      <Image src="/magnifier.png" alt="search-image" width={75} height={100} />
      <p>Start searching for a movie/TV Show</p>
    </div>
  );
}
