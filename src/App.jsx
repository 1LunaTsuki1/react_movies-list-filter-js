import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={inputValue}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFromServer} inputValue={inputValue} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
