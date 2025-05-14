import React, { useEffect, useRef } from 'react';

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Try to play the audio when the component mounts
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.log('Autoplay prevented by browser. User interaction required.');
      }
    };

    playAudio();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
      preload="auto"
    />
  );
};

export default BackgroundAudio; 