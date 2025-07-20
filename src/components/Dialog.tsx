import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DialogProps {
  show: boolean;
}

const Dialog: React.FC<DialogProps> = ({ show }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Tap the Cookie 🍪 to unlock your surprise!";

  useEffect(() => {
    if (show) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <motion.div
      className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ scale: 0, y: -50, rotate: -5 }}
      animate={{ scale: 1, y: 0, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 4.5
      }}
    >
      {/* Balloon-style dialog */}
      <div 
        className="bg-white rounded-2xl px-6 py-4 relative max-w-xs mx-4"
        style={{
          boxShadow: `
            0 8px 32px rgba(0,0,0,0.3),
            0 0 20px rgba(255,255,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.9)
          `,
          border: '2px solid rgba(255,255,255,0.8)',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
        }}
      >
        <p className="text-lg font-semibold text-gray-800 text-center font-nunito leading-relaxed">
          {displayedText}
          <motion.span
            className="inline-block ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </p>
        
        {/* Corner sparkle */}
        <motion.div
          className="absolute -top-2 -right-2 w-5 h-5"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 rounded-full"
            style={{ 
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              filter: 'drop-shadow(0 0 4px #FFD700)'
            }} 
          />
        </motion.div>
        
        {/* Balloon tail */}
        <div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45"
          style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '2px solid rgba(255,255,255,0.8)',
            borderTop: 'none',
            borderLeft: 'none',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.15)' 
          }}
        />
        
        {/* Ambient glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 15px rgba(255,105,180,0.2)',
              '0 0 25px rgba(0,255,255,0.2)',
              '0 0 15px rgba(255,105,180,0.2)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default Dialog;