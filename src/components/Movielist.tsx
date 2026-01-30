import Movie from "./Moviecard";

import movieinfo from "@/movie.json";


function Movielist({ selectedPhase }: { selectedPhase: number }) {

  const phaseMovies = movieinfo.filter(movie => movie.phase === selectedPhase); //Filter movies based on phase selected

  return (
  
    <div className="movielist">
       
        {phaseMovies.map((movie) => (
            <Movie
            key={movie.id}
            title={movie.name}
            description={movie.description}
            posterUrl={movie.link}
            />
        ))}
       
    </div>
  );
}

export default Movielist;