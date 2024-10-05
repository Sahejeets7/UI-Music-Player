import LibrarySong from '../components/LibrarySong';

// Mock data
const song = {
  name: 'Song Title',
  artist: 'Artist Name',
  cover: 'https://via.placeholder.com/150',
  id: '1',
  active: false,
};

const songs = [song];
const setCurrentSong = song => console.log('setCurrentSong', song);
const setSongs = songs => console.log('setSongs', songs);
const audioRef = { current: new Audio() };
const isPlaying = false;

export default {
  title: 'LibrarySong',
  component: LibrarySong,
};

const Template = args => <LibrarySong {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: song.name,
  artist: song.artist,
  cover: song.cover,
  id: song.id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active: song.active,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  active: true,
};

export const Playing = Template.bind({});
Playing.args = {
  ...Default.args,
  isPlaying: true,
};
