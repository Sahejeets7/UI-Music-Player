import React from 'react';

import LibrarySong from './LibrarySong';
import { Reorder, useDragControls } from 'framer-motion';

export type Song = {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: Array<string>;
  id: string;
  active: boolean;
  currentTime?: number;
};

type LibraryProps = {
  songs: Array<Song>;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  isPlaying: boolean;
  libraryStatus: boolean;
  setCurrentSong: (song: Song) => void;
  setSongs: (newSong: Array<Song>) => void;
};

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}: LibraryProps) => {
  const controls = useDragControls();

  return (
    <div className={`library ${libraryStatus ? 'active-library' : ' '}`}>
      <h2>Library</h2>
      <div className="library-Songs">
        <Reorder.Group values={songs} onReorder={setSongs}>
          {songs.map(song => (
            <Reorder.Item
              value={song}
              key={song.id}
              dragListener={false}
              dragControls={controls}>
              <LibrarySong
                songs={songs}
                cover={song.cover}
                name={song.name}
                artist={song.artist}
                active={song.active}
                key={song.id}
                id={song.id}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default Library;
