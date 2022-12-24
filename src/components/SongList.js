import React from "react";
import { createRandomSong } from "../data/index";
import { useDispatch, useSelector } from "react-redux";
import { addSongs, removeSong } from "../store";

function SongList() {
  const dispatch = useDispatch();
  const songPlayList = useSelector((state) => {
    return state.songs;
  });

  const handleSongsAdd = (song) => {
    const action = addSongs(song);
    dispatch(action);
  };

  const handleSongsRemove = () => {
    const action = removeSong();
    dispatch(action);
  };

  const renderSongs = songPlayList.map((song) => {
    return (
      <li key={song}>
        {song}{" "}
        <button onClick={handleSongsRemove} className="button is-danger">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongsAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderSongs}</ul>
    </div>
  );
}

export default SongList;
