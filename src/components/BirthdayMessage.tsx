import React, { useState, useRef } from 'react';
import { Sparkles, Heart } from 'lucide-react';

const BirthdayMessage: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleReveal = () => {
    setRevealed(true);
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative">
      <audio ref={audioRef} src="../song.mp3" />
      {!revealed ? (
        <div className="text-center">
          <button
            onClick={handleReveal}
            className="mystery-button group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-mystery-pink rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative flex items-center">
              Reveal <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
            </span>
          </button>
        </div>
      ) : (
        <div className="animate-scale-in text-center max-w-2xl">
          <div className="mb-6">
            <Heart className="h-16 w-16 text-mystery-pink animate-pulse mx-auto" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 text-gradient">
            Happy Birthday, My Love
          </h1>
          <p className="text-xl font-lato text-white mb-8 leading-relaxed">
            Every moment with you is a gift, and today we celebrate the most 
            precious gift of all — you. May your day be filled with the same 
            joy and wonder that you bring into my life every day.
          </p>
          <p className="text-2xl font-playfair text-mystery-purple animate-pulse">
            Forever Yours
          </p>
        </div>
      )}
      
      {/* Floating particles for the special effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {revealed && Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles 
              className={`h-${Math.floor(Math.random() * 4) + 2} w-${Math.floor(Math.random() * 4) + 2} ${
                Math.random() > 0.5 ? 'text-mystery-purple' : 'text-mystery-pink'
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BirthdayMessage;
