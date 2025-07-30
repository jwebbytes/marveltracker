"use client";

import styles from "./page.module.css";
import Movie from "../components/Moviecard";
import MovieList from "../components/Movielist";

export default function Home() {
  
  return (
    <div className="home">
     
      <h1 className="title">Welcome to the MCU Tracker</h1>
      <p className="tagline">Your one-stop solution for tracking Marvel Cinematic Universe movies and shows.</p>
      <MovieList />
    </div>
  );
}
