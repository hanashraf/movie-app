"use client";
import React from "react";
import Search from "../Search/Search";
import styles from "./SideBar.module.scss";
import Link from "next/link";

type TProps = {
  onClose?: () => void;
};
const SideBar = ({ onClose }: TProps) => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.sidebarContent}>
        <Search placeholder="Search" />
        <Link href="/favourites">
          <button className={styles.sidebarButton}>Favourites</button>
        </Link>
        <button className={styles.sidebarButton}>Watchlist</button>
      </div>
    </div>
  );
};

export default SideBar;
