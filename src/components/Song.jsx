import React from "react";
const Song = ({ curentsongs }) => {
  return (
    <div className="song-container  ">
      <img src={curentsongs.cover} />
      <h2>{curentsongs.name}</h2>
      <h3>{curentsongs.artist}</h3>
    </div>
  );
};

export default Song;
