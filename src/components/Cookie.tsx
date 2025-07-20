import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieProps {
  onCookieTapped: () => void;
}

const Cookie: React.FC<CookieProps> = ({ onCookieTapped }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isShaking, setIsShaking] = useState(false);
  const [isBreathing, setIsBreathing] = useState(true);

  const handleTap = () => {
    setIsBreathing(false);
    setIsShaking(true);
    setTimeout(() => {
      setIsVisible(false);
      onCookieTapped();
    }, 1200);
  };

  return (
    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative cursor-pointer"
            initial={{ scale: 0.1, rotate: 0, y: -200, opacity: 0 }}
            animate={{ 
              scale: isBreathing ? [1, 1.05, 1] : 1,
              rotate: [0, 360], 
              y: 0,
              opacity: 1,
              x: isShaking ? [-12, 12, -8, 8, -4, 4, 0] : 0
            }}
            exit={{
              scale: 0,
              opacity: 0,
              rotate: 1080
            }}
            transition={{
              scale: isBreathing ? { 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 4 
              } : { 
                type: "spring", 
                stiffness: 200, 
                damping: 15, 
                delay: 3.5 
              },
              rotate: { duration: 2, delay: 3.5, ease: "easeOut" },
              y: { type: "spring", stiffness: 100, damping: 20, delay: 3.5 },
              opacity: { duration: 1.5, delay: 3.5 },
              x: { duration: 1.2, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] }
            }}
            onClick={handleTap}
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.92 }}
          >
            {/* MASSIVE Cookie base - Almost touching borders */}
            <div 
              className="w-80 h-80 rounded-full relative"
              style={{
                background: 'radial-gradient(circle at 25% 20%, #F4A460 0%, #DEB887 15%, #D2691E 35%, #CD853F 60%, #B8860B 80%, #8B4513 100%)',
                boxShadow: `
                  inset 4px 4px 16px rgba(255,255,255,0.5),
                  inset -6px -6px 20px rgba(139,69,19,0.5),
                  0 16px 48px rgba(0,0,0,0.5),
                  0 0 40px rgba(255,165,0,0.2),
                  0 0 80px rgba(255,140,0,0.1)
                `
              }}
            >
              {/* Enhanced shine sweep animation */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
              >
                <motion.div
                  className="w-full h-full"
                  style={{
                    background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)'
                  }}
                  animate={{
                    transform: ['translateX(-200%) translateY(-200%)', 'translateX(200%) translateY(200%)']
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Massive chocolate chips with realistic placement */}
              {[
                { top: '12%', left: '20%', size: 'w-12 h-12' },
                { top: '25%', right: '15%', size: 'w-10 h-10' },
                { bottom: '20%', left: '12%', size: 'w-12 h-12' },
                { bottom: '12%', right: '20%', size: 'w-10 h-10' },
                { top: '45%', left: '35%', size: 'w-8 h-8' },
                { top: '35%', right: '35%', size: 'w-8 h-8' },
                { bottom: '35%', left: '30%', size: 'w-10 h-10' },
                { top: '60%', right: '25%', size: 'w-6 h-6' },
                { bottom: '45%', right: '40%', size: 'w-8 h-8' },
                { top: '30%', left: '50%', size: 'w-6 h-6' }
              ].map((position, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position.size} rounded-full`}
                  style={{
                    background: 'radial-gradient(circle at 20% 20%, #5D4037 0%, #4A2C2A 30%, #3B1E17 60%, #2E1A0F 90%, #1A0E08 100%)',
                    boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)',
                    top: position.top,
                    left: position.left,
                    right: position.right,
                    bottom: position.bottom
                  }}
                  animate={{
                    scale: [1, 1.08, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Enhanced cookie highlight */}
              <div 
                className="absolute top-8 left-12 w-16 h-16 rounded-full opacity-50"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 60%, transparent 100%)'
                }}
              />
              
              {/* More dramatic sparkle effects */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-3 h-3 bg-yellow-200 rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    filter: 'drop-shadow(0 0 4px #FFD700)'
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            {/* Enhanced landing dust puff */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 2, 0], opacity: [0, 0.8, 0] }}
              transition={{ delay: 5.5, duration: 1.5 }}
            >
              <div className="w-48 h-16 rounded-full bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-60" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced cookie fragments on break */}
      <AnimatePresence>
        {!isVisible && (
          <>
            {/* Larger cookie pieces */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 rounded-lg"
                style={{
                  background: 'linear-gradient(45deg, #D2691E, #8B4513, #654321)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  left: '50%',
                  top: '50%'
                }}
                initial={{ scale: 1, x: 0, y: 0, rotate: 0 }}
                animate={{
                  x: (Math.cos((i * 45) * Math.PI / 180) * (150 + Math.random() * 100)),
                  y: (Math.sin((i * 45) * Math.PI / 180) * (100 + Math.random() * 80)) + (i * 15),
                  rotate: 720 + (i * 90),
                  scale: 0
                }}
                transition={{
                  duration: 3,
                  ease: "easeOut"
                }}
              />
            ))}
            
            {/* More dramatic confetti burst */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`confetti-${i}`}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%'
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  x: (Math.cos((i * 18) * Math.PI / 180) * (100 + Math.random() * 120)),
                  y: (Math.sin((i * 18) * Math.PI / 180) * (80 + Math.random() * 100)),
                  scale: [0, 1.5, 0],
                  rotate: 720 + Math.random() * 360
                }}
                transition={{
                  duration: 3,
                  ease: "easeOut"
                }}
              >
                <div 
                  className="w-4 h-4"
                  style={{
                    background: ['#FF69B4', '#FFD700', '#00E5FF', '#39FF14', '#FF6B35', '#7209B7', '#FF1493', '#00CED1'][i % 8],
                    borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                    boxShadow: '0 0 8px rgba(255,255,255,0.8)',
                    filter: 'drop-shadow(0 0 4px currentColor)'
                  }}
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cookie;