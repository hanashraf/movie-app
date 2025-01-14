// "use client";
// import "./globals.css";
// import axios from "axios";
// import Navbar from "@/components/Navbar/Navbar";
// import { useEffect } from "react";
// import useMovieStore, { MovieDetails } from "./Store";
// import MovieList from "./movie-list/page";

// // API Key
// const KEY: string = "6dcfeb8f";

// // RootLayout Component
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const { query, setMovies, movies } = useMovieStore();
//   const fetchMovies = async (query: string): Promise<MovieDetails[] | []> => {
//     try {
//       const response = await axios.get<{
//         Search: MovieDetails[];
//         Response: string;
//         Error?: string;
//       }>(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

//       if (response.data.Response === "True") {
//         return response.data.Search;
//       } else {
//         console.error("Error fetching movies:", response.data.Error);
//         return [];
//       }
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//       return [];
//     }
//   };

//   // Fetch movies when the query changes
//   useEffect(() => {
//     const getMovies = async (): Promise<void> => {
//       const fetchedMovies = await fetchMovies(query);
//       setMovies(fetchedMovies); // Updates the Zustand store
//       console.log(fetchedMovies); // Debugging log
//     };

//     getMovies();
//   }, [query, setMovies]); // Re-run only when `query` or `setMovies` changes

//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <MovieList />
//         {children}
//       </body>
//     </html>
//   );
// }

"use client";
import "./globals.css";
// import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
// import { useEffect } from "react";
// import useMovieStore from "./Store";
// import MovieArray from "@/components/MovieList/MovieArray";

// const KEY: string = "6dcfeb8f";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { query, setMovies } = useMovieStore();
  // useEffect(() => {
  //   const fetchMovies = async (query: string) => {
  //     try {
  //       const response = await axios.get(
  //         `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
  //       );

  //       if (response.data.Response) {
  //         setMovies(response.data.Search);
  //         console.log(response.data.Search);
  //       } else {
  //         console.error("Error fetching movies:", response.data.Error);
  //         setMovies([]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //       setMovies([]);
  //     }
  //   };

  //   fetchMovies(query);
  // }, [query, setMovies]);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
