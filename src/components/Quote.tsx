import React, { useEffect, useState, useRef } from 'react';

interface QuoteProps {
  text: string;
  index: number;
}

const Quote: React.FC<QuoteProps> = ({ text, index }) => {
  const [visible, setVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={quoteRef}
      className={`quote-container max-w-3xl mx-auto my-24 transform transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col">
        <blockquote className="font-playfair text-xl md:text-2xl lg:text-3xl text-white mb-4 whitespace-pre-line">
          {text}
        </blockquote>
      </div>
      <div 
        className={`absolute -z-10 blur-2xl rounded-full w-40 h-40 opacity-20 ${
          index % 2 === 0 ? 'bg-mystery-purple' : 'bg-mystery-pink'
        } animate-pulse`}
        style={{
          top: '-10%',
          right: '10%'
        }}
      ></div>
    </div>
  );
};

export default Quote;
