import React from 'react';

import { playAudio } from '../util';
import { Song } from './Library';
import { useDragControls } from 'framer-motion';

type LibrarySongProps = {
  name: string;
  artist: string;
  cover: string;
  id: string;
  setCurrentSong: (song: Song) => void;
  songs: Array<Song>;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: (
    newSong: Array<{
      name: string;
      cover: string;
      artist: string;
      audio: string;
      color: Array<string>;
      id: string;
      active: boolean;
      currentTime?: number;
    }>,
  ) => void;
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
  const controls = useDragControls();

  const songSelectHandler = () => {
    const selectedSong = songs.filter(state => state.id === id);
    try {
      selectedSong[0] ? setCurrentSong(selectedSong[0]) : null;
    } catch (error) {
      console.error('songSelectHandler -> error: ', error);
    }
    // Set Active in library
    const newSongs = songs.map(song => {
      if (song?.id === id) {
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

    // Play audio
    audioRef.current.pause();
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onPointerDown={e => controls.start(e)}
      onClick={songSelectHandler}
      className={`library-song reorder-handle ${active ? 'selected' : ''}`}>
      <img src={cover} alt="" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
