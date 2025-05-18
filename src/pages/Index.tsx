import React, { useEffect, useState } from 'react';
import EntranceAnimation from '../components/EntranceAnimation';
import PhotoGallery from '../components/PhotoGallery';
import Quote from '../components/Quote';
import BirthdayMessage from '../components/BirthdayMessage';

const quotes = [
  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
  "ਫੁੱਲ ਤੇ ਖੁਸ਼ਬੋ ਅੱਜ ਮਿਲ ਕੇ ਮਹਿਫਿਲ ਕਰਵਾਉਣ ਲੱਗੇ ਨੇ,\nਧਰਤੀ ਤੋਂ ਲਈ ਇਜਾਜ਼ਤ ਸੁਫ਼ਨੇ ਰੰਗਵਾਉਣ ਲੱਗੇ ਨੇ,\nਬੱਦਲਾਂ ਨੇ ਬੰਦੋਬਸਤ ਵੀ ਕੀਤੇ ਨੇ ਉਮਦਾ ਸਾਰੇ,\nਧੁੱਪ ਹੋਰੀਂ ਲਾਉਣ ਕਨਾਤਾਂ ਮੌਸਮ ਵੀ ਗਾਉਣ ਲੱਗੇ ਨੇ |"
];

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show main content after the entrance animation
    setTimeout(() => {
      setShowContent(true);
    }, 4200);
    
    // Add a class to the body to prevent scrolling during entrance animation
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4200);
  }, []);

  return (
    <div className="min-h-screen bg-mystery-dark text-white">
      <EntranceAnimation />
      
      {showContent && (
        <>
          <header className="pt-16 pb-8 px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4 text-gradient">
              A Mystery Unfolds
            </h1>
            <p className="text-lg text-mystery-gray max-w-2xl mx-auto">
              Scroll to embark on a journey through memories, moments, and magic
            </p>
          </header>
          
          <main>
            <PhotoGallery />
            
            <div className="max-w-6xl mx-auto px-4">
              <div className="my-16">
                <div className="h-px bg-gradient-to-r from-mystery-dark via-mystery-purple to-mystery-dark"></div>
              </div>
              
              {quotes.map((quote, index) => (
                <Quote 
                  key={index}
                  text={quote}
                  index={index}
                />
              ))}
              
              <div className="my-16">
                <div className="h-px bg-gradient-to-r from-mystery-dark via-mystery-pink to-mystery-dark"></div>
              </div>
            </div>
            
            <BirthdayMessage />
          </main>
          
          <footer className="py-6 bg-mystery-dark/80 border-t border-mystery-purple/30 text-center text-mystery-gray">
            <p className="text-sm">Created with love, for the love of my life</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
