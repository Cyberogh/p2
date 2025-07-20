import React from 'react';
import { motion } from 'framer-motion';

const Lighting: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Realistic spotlight fixtures at top */}
      <motion.div
        className="absolute top-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Main center spotlight fixture */}
        <div className="relative">
          <div 
            className="w-16 h-16 rounded-full"
            style={{
              background: 'radial-gradient(circle, #2C2C2C 0%, #1A1A1A 40%, #0D0D0D 100%)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.1)'
            }}
          />
          {/* Lens */}
          <div 
            className="absolute inset-2 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)',
              border: '2px solid #444'
            }}
          />
        </div>
      </motion.div>

      {/* Left spotlight fixture */}
      <motion.div
        className="absolute top-6 left-8"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: -15 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <div className="relative transform rotate-12">
          <div 
            className="w-12 h-12 rounded-full"
            style={{
              background: 'radial-gradient(circle, #2C2C2C 0%, #1A1A1A 40%, #0D0D0D 100%)',
              boxShadow: '0 3px 8px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.1)'
            }}
          />
          <div 
            className="absolute inset-1 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)',
              border: '1px solid #444'
            }}
          />
        </div>
      </motion.div>

      {/* Right spotlight fixture */}
      <motion.div
        className="absolute top-6 right-8"
        initial={{ opacity: 0, rotate: 30 }}
        animate={{ opacity: 1, rotate: 15 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        <div className="relative transform -rotate-12">
          <div 
            className="w-12 h-12 rounded-full"
            style={{
              background: 'radial-gradient(circle, #2C2C2C 0%, #1A1A1A 40%, #0D0D0D 100%)',
              boxShadow: '0 3px 8px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.1)'
            }}
          />
          <div 
            className="absolute inset-1 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)',
              border: '1px solid #444'
            }}
          />
        </div>
      </motion.div>

      {/* Main center spotlight beam coming DOWN */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.5, duration: 3, ease: "easeOut" }}
      >
        <div 
          className="w-80 h-96 origin-top"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 0, 0.9) 0%, rgba(255, 215, 0, 0.6) 40%, rgba(255, 255, 0, 0.3) 80%, rgba(255, 255, 0, 0.05) 100%)',
            clipPath: 'polygon(40% 0%, 60% 0%, 75% 100%, 25% 100%)',
            filter: 'blur(1px)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
          }}
        />
      </motion.div>
      
      {/* Left side spotlight beam coming DOWN */}
      <motion.div
        className="absolute top-24 left-8"
        initial={{ opacity: 0, rotate: -60, scaleY: 0.3 }}
        animate={{ opacity: 0.8, rotate: -30, scaleY: 1 }}
        transition={{ delay: 2.5, duration: 3, ease: "easeOut" }}
      >
        <div 
          className="w-64 h-80 origin-top-left"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 0, 0.6) 0%, rgba(255, 215, 0, 0.4) 40%, rgba(255, 255, 0, 0.2) 80%, transparent 100%)',
            clipPath: 'polygon(0% 0%, 30% 0%, 100% 100%, 70% 100%)',
            filter: 'blur(2px)',
            maskImage: 'linear-gradient(135deg, black 0%, black 60%, transparent 100%)'
          }}
        />
      </motion.div>
      
      {/* Right side spotlight beam coming DOWN */}
      <motion.div
        className="absolute top-24 right-8"
        initial={{ opacity: 0, rotate: 60, scaleY: 0.3 }}
        animate={{ opacity: 0.8, rotate: 30, scaleY: 1 }}
        transition={{ delay: 2.7, duration: 3, ease: "easeOut" }}
      >
        <div 
          className="w-64 h-80 origin-top-right"
          style={{
            background: 'linear-gradient(225deg, rgba(255, 255, 0, 0.6) 0%, rgba(255, 215, 0, 0.4) 40%, rgba(255, 255, 0, 0.2) 80%, transparent 100%)',
            clipPath: 'polygon(70% 0%, 100% 0%, 30% 100%, 0% 100%)',
            filter: 'blur(2px)',
            maskImage: 'linear-gradient(225deg, black 0%, black 60%, transparent 100%)'
          }}
        />
      </motion.div>
      
      {/* Ambient stage glow from lights */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-96 h-32"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 0, 0.4) 0%, rgba(255, 215, 0, 0.3) 40%, transparent 80%)',
            filter: 'blur(12px)'
          }}
        />
      </motion.div>
    </div>
  );
};

export default Lighting;