import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const ToggleList = ({ setDisplayListSong, displayListSong }) => {
  return (
    <div className="App-header">
      <nav>
        <h1 id="app-title">Waves</h1>
        <button onClick={() => setDisplayListSong(!displayListSong)}>
          <span id="btn-toggle">Song List</span>
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </nav>
    </div>
  );
};

export default ToggleList;
