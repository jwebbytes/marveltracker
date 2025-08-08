import Movie from "./Moviecard";

import movieinfo from "@/movie.json";


function Movielist() {
  return (
    <div className="movielist">
     
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