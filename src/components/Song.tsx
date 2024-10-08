type SongProps = {
  currentSong: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: Array<string>;
    id: string;
    active: boolean;
    currentTime?: number;
  };
  isPlaying: boolean;
};

const Song = ({ currentSong, isPlaying }: SongProps) => {
  return (
    <div className="song-container">
      <img
        className={isPlaying ? 'rotateSong' : ''}
        src={currentSong.cover}
        alt=""
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
