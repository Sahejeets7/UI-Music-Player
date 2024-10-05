/* eslint-disable no-unused-vars */
export const playAudio = async (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();

    if (playPromise != null) {
      try {
        await playPromise;
        audioRef.current.pause();
        audioRef.current.play();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
