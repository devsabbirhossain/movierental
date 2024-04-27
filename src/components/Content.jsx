import { getAllMovieList } from "../data/movieList";
import MovieCard from "./movie/MovieCard";

const Content = () => {
  const movies = getAllMovieList();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Content;
