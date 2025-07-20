import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Main gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center top, #3A1D85 0%, #2D1F5C 60%, #1A0F3D 100%)'
        }}
      />
      
      {/* Subtle animated light rays */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'conic-gradient(from 0deg at 50% 20%, transparent 0deg, rgba(255,255,255,0.03) 30deg, transparent 60deg, rgba(255,255,255,0.02) 120deg, transparent 180deg, rgba(255,255,255,0.03) 240deg, transparent 300deg, rgba(255,255,255,0.02) 360deg)',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
        }}
      />
      
      {/* Film grain texture */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px'
        }}
      />
      
      {/* Floating sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default Background;