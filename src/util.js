/* eslint-disable no-unused-vars */
export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();

    if (playPromise != null) {
      playPromise
        .then(_ => {
          audioRef.current.pause();
          audioRef.current.play();
        })
        .catch(error => console.log(error));
    } else {
    }
  }
};
