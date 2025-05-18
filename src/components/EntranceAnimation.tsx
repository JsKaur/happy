
import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const EntranceAnimation: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Show text after 1 second
    setTimeout(() => {
      setTextVisible(true);
    }, 1000);

    // Hide entire animation after 4 seconds
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-mystery-dark">
      <div className="text-center">
        <div className="mb-6">
          <Sparkles className="h-16 w-16 text-mystery-purple animate-pulse mx-auto" />
        </div>
        {textVisible && (
          <div className="animate-fade-in">
            <p className="font-playfair text-4xl text-gradient mb-4">A journey awaits...</p>
            <p className="text-mystery-gray animate-pulse">Let's discover</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntranceAnimation;
