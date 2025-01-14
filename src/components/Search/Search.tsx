"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Search.module.scss";
import useQueryStore from "@/stores/QueryStore";
import clsx from "clsx";

type TProps = {
  placeholder: string;
  isMenu?: boolean;
};

const Search: React.FC<TProps> = ({ placeholder, isMenu }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const setQuery = useQueryStore((state) => state.setQuery);
  const router = useRouter();

  useEffect(() => {
    const storedQuery = localStorage.getItem("searchQuery");
    if (storedQuery) {
      setSearchValue(storedQuery);
      setQuery(storedQuery);
    }
  }, [setQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.length >= 3) {
      setQuery(value);
      localStorage.setItem("searchQuery", value); // Save to localStorage
    } else {
      setQuery("");
      localStorage.removeItem("searchQuery"); // Clear from localStorage
    }
  };

  const handleSearch = () => {
    if (searchValue.length >= 3) {
      setQuery(searchValue);
      router.push("/movies");
    }
  };

  return (
    <div className={clsx(styles.middleStyling, { [styles.isOpened]: isMenu })}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchBar}
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <Image
        src="/search.svg"
        alt="search-image"
        className={styles.searchButton}
        width={50}
        height={37}
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
