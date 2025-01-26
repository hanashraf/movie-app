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
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const setQuery = useQueryStore((state) => state.setQuery);
  const query = useQueryStore((state) => state.query);
  const router = useRouter();

  useEffect(() => {
    const storedQuery = sessionStorage.getItem("searchQuery");
    if (storedQuery) {
      setQuery(storedQuery);
      router.replace("/movies");
    }
  }, [setQuery, router]);

  useEffect(() => {
    if (query.length === 0) {
      setQuery("");
      return;
    }

    const delay = query.length < 4 ? 600 : 300;
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => clearTimeout(handler);
  }, [setQuery, query]);

  useEffect(() => {
    if (debouncedQuery.length >= 0) {
      setQuery(debouncedQuery);
      sessionStorage.setItem("searchQuery", debouncedQuery);
    } else {
      setQuery("");
      sessionStorage.removeItem("searchQuery");
    }
  }, [debouncedQuery, setQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const newUrl = `/movies?query=${e.target.value}`;
    router.push(newUrl);
  };

  const handleSearch = () => {
    router.push(`/movies?query=${query}`);
    console.log(query);
  };

  return (
    <div className={clsx(styles.middleStyling, { [styles.isOpened]: isMenu })}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchBar}
        value={query}
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
