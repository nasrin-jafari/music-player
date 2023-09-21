import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import musicData from "./data";
import { useState } from "react";
import SongList from "./components/SongList";
import ToggleList from "./components/ToggleList";
function App() {
  const [songs, setSongs] = useState(musicData());
  const [curentsongs, setCurentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayListSong, setDisplayListSong] = useState(false);
  return (
    <div className={`App ${displayListSong ? "activeList" : ""}`}>
      <ToggleList
        displayListSong={displayListSong}
        setDisplayListSong={setDisplayListSong}
      />
      <Song curentsongs={curentsongs} />
      <Player
        songs={songs}
        curentsongs={curentsongs}
        setCurentSongs={setCurentSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
      />
      <SongList
        songs={songs}
        setCurentSongs={setCurentSongs}
        setSongs={setSongs}
        displayListSong={displayListSong}
      />
    </div>
  );
}

export default App;
