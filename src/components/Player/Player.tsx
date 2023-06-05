import React, { useRef, useState } from "react";
import { BsPlay } from "react-icons/bs";
import { AiOutlinePause } from "react-icons/ai";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import styles from "./Player.module.scss";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoPath, setVideoPath] = useState("");

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipFiveSeconds = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
    }
  };

  const backFiveSeconds = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  };

  const handleVideoPathChange = () => {
    if (videoRef.current && videoPath) {
      videoRef.current.src = videoPath;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoPath(event.target.value);
  };

  return (
    <div className={styles.player}>
      <input
        className={styles.player__input}
        type='text'
        onChange={handleInputChange}
        placeholder='Wprowadz adres video'
      />
      <button
        className={styles.player__button}
        onClick={handleVideoPathChange}
        disabled={!videoPath}
      >
        Change Video
      </button>
      <video
        className={styles.player__video}
        ref={videoRef}
        src='https://www.ophi.org.uk/wp-content/uploads/WEAI-video-for-web.mp4'
      />

      <div className={styles.player__controls}>
        <button className={styles.player__button} onClick={backFiveSeconds}>
          <IoMdArrowBack size={18} />
          <span style={{ fontSize: 22 }}>5s</span>
        </button>
        <button className={styles.player__button} onClick={togglePlay}>
          {isPlaying ? <AiOutlinePause size={28} /> : <BsPlay size={28} />}
        </button>
        <button className={styles.player__button} onClick={skipFiveSeconds}>
          <span style={{ fontSize: 22 }}>5s</span>
          <IoMdArrowForward size={18} />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
