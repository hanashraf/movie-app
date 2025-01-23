"use client";
import React, { useState } from "react";
import Image from "next/image";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.scss";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import clsx from "clsx";

const playfair_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const Navbar = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const closeModal = () => setIsMenu(false);
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
          <Link href="/favourites">
            <button className={styles.navbarButton}>Favourites</button>
          </Link>
          <button className={styles.navbarButton}>En|Ar</button>
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
