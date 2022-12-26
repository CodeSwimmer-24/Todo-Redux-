import React from "react";
import { createRandomMovie } from "../../data/index";
import { addMovies, removeMovies } from "../../store";
import { useDispatch, useSelector } from "react-redux";

function MovieList() {
  const moviePlayList = useSelector((state) => {
    return state.movies;
  });

  const dispatch = useDispatch();

  const handleMovieAdd = (movie) => {
    const action = addMovies(movie);
    dispatch(action);
  };

  const handleRemoveMoves = () => {
    const action = removeMovies();
    dispatch(action);
  };
  const renderedMovies = moviePlayList.map((movie) => {
    return (
      <li key={movie}>
        {movie}

        <button onClick={handleRemoveMoves} className="button is-danger">
          X
        </button>
      </li>
    );
  });
  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MovieList;
