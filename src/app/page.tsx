"use client";


import Phaseselection from "../components/Phaseselection";

export default function Home() {
  
  return (
    <div className="home">
     
      <h1 className="title">Marvel Tracker</h1>
      <p className="tagline">Your one-stop solution for tracking Marvel Cinematic Universe movies and shows.</p>
      <Phaseselection />
    </div>
  );
}
