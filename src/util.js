/* eslint-disable no-unused-vars */
export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    console.log('PLayAudio = isPlaying -> ', isPlaying);
    console.log('Utils making a promise for audio', audioRef.current);
    const playPromise = audioRef.current.play();
    console.log('playPromise', playPromise);

    if (playPromise != null) {
      playPromise
        .then(_ => {
          audioRef.current.pause();
          audioRef.current.play();
        })
        .catch(error => console.log(error));
    } else {
      console.log('promise is null');
    }
  }
};
