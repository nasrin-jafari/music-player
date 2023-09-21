import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  curentsongs,
  setIsPlaying,
  isPlaying,
  songs,
  setCurentSongs,
  setSongs,
}) => {
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  useEffect(() => {
    const newSongs = songs.map((item) => {
      if (item.id === curentsongs.id) {
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
  }, [curentsongs]);
  const { currentTime, duration, animationPercentage } = songInfo;

  const timeUpdateHandler = (e) => {
    // console.log(e.target.currentTime)
    // console.log(e.target.duration)
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const roundCurent = Math.round(currentTime);
    const roundDuration = Math.round(duration);
    const animationPercentage = Math.round((roundCurent / roundDuration) * 100);
    // console.log(animationPercentage);
    // setSongInfo({ ...songInfo, currentTime: currentTime, duration: duration });
    if (currentTime === duration) {
      const curentIndex = songs.findIndex((item) => item.id === curentsongs.id);
      if (curentIndex === songs.length - 1) {
        setCurentSongs(songs[0]);
      } else {
        setCurentSongs(songs[curentIndex + 1]);
      }
      playSong()
    }

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage,
    });
  };
  const timeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const playSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const dragHandler = (e) => {
    // console.log(e.target.value)
    audioRef.current.currentTime = e.target.value;

    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipSong = (dir) => {
    const curentIndex = songs.findIndex((item) => item.id === curentsongs.id);

    if (dir == "next") {
      if (curentIndex === songs.length - 1) {
        setCurentSongs(songs[0]);
      } else {
        setCurentSongs(songs[curentIndex + 1]);
      }
    }
    if (dir == "back") {
      if (curentIndex === 0) {
        setCurentSongs(songs[songs.length - 1]);
      } else {
        setCurentSongs(songs[curentIndex - 1]);
      }
    }
  };
  const trackAnimation = {
    transform: `translateX(${animationPercentage}%)`,
    background: `linear-gradient(to right , ${curentsongs.color[0]} , ${curentsongs.color[2]})`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{timeFormat(currentTime)}</p>
        <div
          className="track"
          // style={{background : }}
        >
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={dragHandler}
          />
          <div className="animate-track" style={trackAnimation}></div>
        </div>
        <p>{timeFormat(duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipSong("back")}
        />
        <FontAwesomeIcon
          onClick={playSong}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipSong("next")}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={curentsongs.audio}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
};

export default Player;
