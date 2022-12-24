import MovieList from "./components/MovieList";
import SongList from "./components/SongList";
import "./App.css";
import { reset } from "./store";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const handleClear = () => {
    const action = reset();
    dispatch(action);
  };
  return (
    <div className="container is-fluid">
      <button onClick={handleClear} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MovieList />
      <hr />
      <br />
      <SongList />
    </div>
  );
}

export default App;
