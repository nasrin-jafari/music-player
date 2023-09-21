import React from "react";
import SongListItem from "./SongListItem";

const SongList = ({ songs, setCurentSongs, setSongs, displayListSong }) => {
  return (
    <div className={`song-list ${displayListSong ? "" : "displayList"}`}>
      <h2>List of Songs</h2>
      <div className="song-list-item">
        {songs.map((song) => (
          <SongListItem
            key={song.id}
            songs={songs}
            song={song}
            setCurentSongs={setCurentSongs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;
