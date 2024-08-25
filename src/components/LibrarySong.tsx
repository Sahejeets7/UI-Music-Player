/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { playAudio } from '../util';

type LibrarySongProps = {
  name: string;
  artist: string;
  cover: string;
  id: string;
  setCurrentSong: (newSongs: {
    name?: string;
    cover?: string;
    artist?: string;
    audio?: string;
    color?: string[];
    id?: string;
    active?: boolean;
    currentTime?: number;
  }) => void;
  songs: Array<{
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
    currentTime?: number;
  }>;
  audioRef: any;
  isPlaying: boolean;
  setSongs: (newSong: Array<{
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
    currentTime?: number;
  }>) => void;
  active: boolean;
};

const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
}: LibrarySongProps) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter(state => state.id === id);
    setCurrentSong({ ...selectedSong[0] });
    //Set Active in library
    const newSongs = songs.map(song => {
      if (song.id === id) {
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

    //Play audio

    await audioRef.current.pause();
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${active ? 'selected' : ''}`}>
      <img src={cover} alt="" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
