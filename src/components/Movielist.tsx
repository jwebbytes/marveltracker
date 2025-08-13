import Movie from "./Moviecard";

import movieinfo from "@/movie.json";


function Movielist({ selectedPhase }) {
  return (
  
    <div className="movielist">
          <h2>The phase is: {selectedPhase}</h2>
        {movieinfo.map((movie) => (
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