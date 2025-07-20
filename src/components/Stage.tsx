import React from 'react';
import { motion } from 'framer-motion';

const Stage: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      {/* Stage platform */}
      <motion.div
        className="relative"
        initial={{ y: 200, scale: 0.6, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: 1.2,
          duration: 2
        }}
      >
        {/* Main stage surface - Big and Beige */}
        <div 
          className="w-96 h-20 rounded-t-3xl relative"
          style={{
            background: 'linear-gradient(135deg, #F5F5DC 0%, #DDD8C0 30%, #C8B99C 70%, #B8A082 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            boxShadow: `
              inset 0 4px 8px rgba(255,255,255,0.6),
              inset 0 -2px 4px rgba(0,0,0,0.1),
              0 12px 32px rgba(0,0,0,0.4),
              0 0 60px rgba(245, 245, 220, 0.2)
            `,
            transform: 'perspective(1000px) rotateX(12deg)'
          }}
        >
          {/* Stage wood grain texture */}
          <div 
            className="absolute inset-0 rounded-t-3xl opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(139,69,19,0.1) 2px,
                rgba(139,69,19,0.1) 4px
              )`
            }}
          />
          
          {/* Stage reflection */}
          <div 
            className="absolute inset-x-0 top-0 h-1/2 rounded-t-3xl"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 100%)'
            }}
          />

          {/* Subtle stage edge glow */}
          <motion.div
            className="absolute inset-0 rounded-t-3xl"
            style={{
              background: 'linear-gradient(90deg, rgba(255,215,0,0.3), rgba(255,165,0,0.3), rgba(255,215,0,0.3))',
              padding: '1px',
              borderRadius: 'inherit'
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-full h-full rounded-t-3xl"
              style={{
                background: 'linear-gradient(135deg, #F5F5DC 0%, #DDD8C0 30%, #C8B99C 70%, #B8A082 100%)'
              }}
            />
          </motion.div>
        </div>
        
        {/* Stage base/depth - Enhanced */}
        <div 
          className="w-96 h-8 relative"
          style={{
            background: 'linear-gradient(135deg, #B8A082 0%, #A0906E 50%, #8B7355 100%)',
            transform: 'perspective(1000px) rotateX(12deg)',
            transformOrigin: 'top center',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
          }}
        />
        
        {/* Enhanced stage shadow */}
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[28rem] h-12 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)',
            filter: 'blur(8px)'
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scaleX: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default Stage;