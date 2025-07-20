import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap } from 'lucide-react';

interface CourseCardProps {
  show: boolean;
  onComplete: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ show, onComplete }) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onComplete();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      initial={{ y: 300, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 25,
        duration: 1.5
      }}
    >
      <div 
        className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-8 w-[28rem] relative"
        style={{
          boxShadow: '0 20px 80px rgba(0,0,0,0.4), 0 0 60px rgba(59,255,20,0.3)'
        }}
      >
        {/* Enhanced ambient glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(59,255,20,0.15) 0%, transparent 70%)',
            filter: 'blur(30px)'
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced limited time badge */}
        <motion.div
          className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-bold"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 15px rgba(255,255,255,0.9)',
                '0 0 0px rgba(255,255,255,0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            LIMITED TIME ONLY!
          </motion.span>
          
          {/* Enhanced rotating sparkles */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: Math.cos((i * 90 + Date.now() / 80) * Math.PI / 180) * 25,
                y: Math.sin((i * 90 + Date.now() / 80) * Math.PI / 180) * 25,
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
        
        <div className="flex items-start space-x-6 relative z-10">
          {/* Enhanced thumbnail */}
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
            style={{
              boxShadow: '0 0 30px rgba(0,255,255,0.5)'
            }}
          >
            <BookOpen className="w-10 h-10 text-white" />
            
            {/* Enhanced neon glow */}
            <div 
              className="absolute inset-0 rounded-xl"
              style={{
                border: '3px solid #00FFFF',
                filter: 'blur(3px)',
                opacity: 0.7
              }}
            />
          </motion.div>
          
          <div className="flex-1">
            {/* Enhanced course title */}
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                textShadow: '0 3px 6px rgba(0,0,0,0.15)'
              }}
            >
              Ultimate Creative Skills Program
            </motion.h3>
            
            {/* Enhanced pricing with dramatic animation */}
            <div className="space-y-2">
              {/* Original price - BIG first, then struck through */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <motion.span 
                  className="text-4xl font-bold text-gray-600"
                  initial={{ fontSize: '2.5rem' }}
                  animate={{ fontSize: '1.5rem' }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  ₹45,000
                </motion.span>
                
                {/* Dramatic red strike-through */}
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-red-500 top-1/2 transform -translate-y-1/2"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '7ch', opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.2, ease: "easeInOut" }}
                  style={{
                    boxShadow: '0 0 10px #FF0000',
                    filter: 'drop-shadow(0 0 5px #FF0000)'
                  }}
                />
              </motion.div>
              
              {/* New price - Dramatic entrance */}
              <motion.div
                className="text-4xl font-bold"
                style={{
                  background: 'linear-gradient(45deg, #39FF14, #00FFAA, #39FF14)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 10px #39FF14)'
                }}
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0, 
                  opacity: 1,
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  scale: { delay: 2.5, type: "spring", stiffness: 200, damping: 10 },
                  rotate: { delay: 2.5, duration: 1 },
                  opacity: { delay: 2.5, duration: 0.5 },
                  backgroundPosition: { delay: 3, duration: 3, repeat: Infinity, ease: "linear" }
                }}
              >
                ₹999/-
                <motion.span
                  className="inline-block ml-3"
                  animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 3.2,
                    repeat: 3
                  }}
                >
                  <Zap className="w-8 h-8 text-yellow-400 inline" />
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;