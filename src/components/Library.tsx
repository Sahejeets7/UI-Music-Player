import React from 'react';

import LibrarySong from './LibrarySong';

type song = {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
  currentTime?: number;
};

type LibraryProps = {
  songs: Array<song>;
  setCurrentSong: Array<song>;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: Array<song>;
  libraryStatus: Array<song>;
};

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}: LibraryProps) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ' '}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
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
        ))}
      </div>
    </div>
  );
};

export default Library;
