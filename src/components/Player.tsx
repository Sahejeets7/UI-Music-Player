import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeDown,
} from '@fortawesome/free-solid-svg-icons';

import { playAudio } from '../util';
import { Song } from './Library';

type Props = {
  alertError: string;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  songInfo: {
    currentTime: number;
    duration: number;
    volume: string;
    animationPercentage: number;
  };
  setSongInfo: (value: {
    name?: string;
    cover?: string;
    artist?: string;
    audio?: string;
    color?: Array<string>;
    id?: string;
    active?: boolean;
    currentTime: number;
    volume?: string;
  }) => void;
  currentSong: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: Array<string>;
    id: string;
    active: boolean;
  };
  songs: Array<Song>;
  setCurrentSong: (song: Song) => void;
  setSongs: (
    value: Array<{
      name: string;
      cover: string;
      artist: string;
      audio: string;
      color: Array<string>;
      id: string;
      active: boolean;
    }>,
  ) => void;
};

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  currentSong,
  songs,
  setCurrentSong,
  setSongs,
}: Props): JSX.Element => {
  const [activeVolume, setActiveVolume] = useState<boolean>(false);
  const activeLibraryHandler = (nextPrev: { id: string }) => {
    const newSongs = songs.map(song => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  function getTime(time: number): string {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  }
  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const currentTime = parseFloat(target.value);
    audioRef.current.currentTime = currentTime;
    setSongInfo({
      ...songInfo,
      currentTime,
    });
  };

  const playSongHandler = async () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      try {
        await audioRef.current?.play();
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('error', error);
      }
    }
  };
  const skipTrackHandler = async (direction: string) => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);

    if (direction === 'skip-forward') {
      const nextSong = songs[(currentIndex + 1) % songs.length];
      if (nextSong) {
        await setCurrentSong(nextSong);
        activeLibraryHandler(nextSong);
      }
    }
    if (direction === 'skip-back') {
      const lastSong = songs[songs.length - 1];
      if ((currentIndex - 1) % songs.length === -1 && lastSong != null) {
        await setCurrentSong(lastSong);
        activeLibraryHandler(lastSong);
        playAudio(isPlaying, audioRef);
        return;
      }
      const prevSong = songs[(currentIndex - 1) % songs.length];
      prevSong ? await setCurrentSong(prevSong) : [];
      prevSong ? activeLibraryHandler(prevSong) : [];
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat((e.target as HTMLInputElement).value);
    audioRef.current.volume = value;
    setSongInfo({ ...songInfo, volume: value.toString() });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track">
          <input
            value={songInfo.currentTime}
            type="range"
            max={songInfo.duration || 0}
            min={0}
            onChange={dragHandler}
          />
          <div style={trackAnim} className="animate-track" />
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler('skip-forward')}
        />
        <FontAwesomeIcon
          onClick={() => setActiveVolume(!activeVolume)}
          icon={faVolumeDown}
        />
        {activeVolume && (
          <input
            onChange={changeVolume}
            value={songInfo.volume}
            max="1"
            min="0"
            step="0.01"
            type="range"
          />
        )}
      </div>
    </div>
  );
};

export default Player;
