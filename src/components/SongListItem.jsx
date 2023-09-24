import React from "react";

const SongListItem = ({
  song,
  setCurentSongs,
  songs,
  setSongs,
  setIsPlaying,
}) => {
  const songSelected = () => {
    const selectedSong = songs.filter((item) => item.id === song.id);
    setCurentSongs(selectedSong[0]);
    const newSongs = songs.map((item) => {
      if (item.id === selectedSong[0].id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    setIsPlaying(true);
  };
  return (
    // <div onClick={() => setCurentSongs(song)} className="song-item">
    <div
      onClick={songSelected}
      className={`song-item ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default SongListItem;
