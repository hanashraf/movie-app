"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.scss";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import useFavouriteStore from "@/stores/FavouritesStore";

const playfair_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const Navbar = () => {
  const favourites = useFavouriteStore((state) => state.favorites);
  const favouritesCount = favourites.length;

  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = () => setIsMenu(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [favouritesCount]);

  return (
    <>
      <nav className={styles.navbarStyling}>
        <div className={styles.leftStyling}>
          <div
            className={styles.removeButton}
            onClick={() => {
              setIsMenu(true);
            }}
          >
            <Image
              src="/menu.svg"
              alt="menu-image"
              className={styles.menuImg}
              width={25}
              height={25}
            />
          </div>

          <div />
          <div className={playfair_Display.className}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Logo />
            </Link>
          </div>
        </div>

        <div className={styles.searchWrapper}>
          <Search placeholder="Search" isMenu={isMenu} />
        </div>

        <div
          className={clsx(styles.rightStyling, { [styles.isOpened]: isMenu })}
        >
          <Link href="/favourites" className={styles.favouritesWrapper}>
            <button className={styles.navbarButton}>Favourites</button>

            <div>
              <AnimatePresence>
                {favouritesCount > 0 && (
                  <motion.span
                    key={favouritesCount}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isAnimating ? [1, 1.4, 1] : 1,
                      opacity: 1,
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={styles.favouritesCount}
                  >
                    {favouritesCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </Link>

          <button className={styles.navbarButton}>Watchlist</button>
        </div>
      </nav>

      {isMenu && (
        <Modal onClose={closeModal}>
          <SideBar onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Navbar;
