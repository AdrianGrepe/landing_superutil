import React from "react";
import YouTube from "react-youtube";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ videoId, autoplay = 1, loop = 1 }) => {
  const opts = {
    playerVars: {
      autoplay,
      loop,
      playlist: videoId,
    },
  };

  const handleOnReady = (e) => {
    e.target.mute();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <YouTube videoId={videoId} opts={opts} onReady={handleOnReady} />
      </div>
    </div>
  );
};

export default VideoPlayer;
