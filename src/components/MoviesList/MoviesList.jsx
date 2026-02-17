import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, inputValue }) => {
  const normalizedQuery = inputValue.trim().toLowerCase();

  const filteredMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = movie.description
      .toLowerCase()
      .includes(normalizedQuery);

    return titleMatch || descriptionMatch;
  });

  return (
    <div className="movies">
      {filteredMovies.map(movie => {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      })}
      {filteredMovies.length === 0 && (
        <p>{`No movies found for "${inputValue}"`}</p>
      )}
    </div>
  );
};
