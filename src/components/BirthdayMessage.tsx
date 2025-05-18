import React, { useState, useRef } from 'react';
import { Sparkles, Heart } from 'lucide-react';

const BirthdayMessage: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answer, setAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showBox, setShowBox] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleReveal = () => {
    setRevealed(true);
    setShowQuestion(true);
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
  };

  const handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase() === 'harjeet') {
      setShowBox(true);
      setShowQuestion(false);
      setErrorMessage('');
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 3) {
        setErrorMessage('Sorry! No more chances left.');
        setShowQuestion(false);
      } else {
        setErrorMessage(`Sorry! You have ${3 - attempts} more chances left.`);
      }
    }
  };

  const handleBoxClick = () => {
    setShowBox(false);
    setShowLetter(true);
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
              A wish awaits <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
            </span>
          </button>
        </div>
      ) : (
        <div className="animate-scale-in text-center max-w-2xl">
          <div className="mb-6">
            <Heart className="h-16 w-16 text-mystery-pink animate-pulse mx-auto" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 text-gradient">
            Happy Birthday Gyani Ji
          </h1>
          <p className="text-xl font-lato text-white mb-8 leading-relaxed">
            Every moment with you is a gift, and today we celebrate the most 
            precious gift of all — you. May your day be filled with the same 
            joy and wonder that you bring into my life.
          </p>
          <p className="text-2xl font-playfair text-mystery-purple animate-pulse">
            Forever Yours
          </p>

          {/* Question and Box Section */}
          <div className="mt-32">
            {showQuestion && (
              <div className="mb-8">
                <p className="text-xl text-mystery-purple mb-4">Answer the question right to unlock a message</p>
                <form onSubmit={handleAnswerSubmit} className="space-y-4">
                  <p className="text-2xl font-playfair text-white mb-4">Who calls me Chalako Maasi? Quite Easy!</p>
                  <div className="flex justify-center gap-2">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={answer[index] || ''}
                        onChange={(e) => {
                          const newAnswer = [...answer];
                          newAnswer[index] = e.target.value;
                          setAnswer(newAnswer.join(''));
                        }}
                        className="w-12 h-12 text-center text-2xl font-playfair rounded-md bg-mystery-dark border border-mystery-purple text-white focus:outline-none focus:ring-2 focus:ring-mystery-purple"
                      />
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="mystery-button group mt-4"
                  >
                    <span className="relative flex items-center">
                      Submit Answer
                    </span>
                  </button>
                </form>
                {errorMessage && (
                  <p className="text-red-400 mt-2 animate-pulse">{errorMessage}</p>
                )}
              </div>
            )}

            {showBox && (
              <div 
                className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={handleBoxClick}
              >
                <img 
                  src="/box.png" 
                  alt="Mystery Box" 
                  className="w-64 h-64 object-contain mx-auto animate-bounce"
                />
                <p className="text-mystery-purple mt-2 animate-pulse">Click to open the box</p>
              </div>
            )}

            {showLetter && (
              <div className="animate-fade-in">
                <img 
                  src="/letter.png" 
                  alt="Letter" 
                  className="w-[600px] h-97 object-contain mx-auto"
                />
              </div>
            )}
          </div>
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
