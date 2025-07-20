import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Stage from './components/Stage';
import Lighting from './components/Lighting';
import Cookie from './components/Cookie';
import Dialog from './components/Dialog';
import CourseCard from './components/CourseCard';

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [showCourseCard, setShowCourseCard] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCookieTapped = () => {
    setShowDialog(false);
    setTimeout(() => {
      setShowCourseCard(true);
    }, 2000);
  };

  const handleCourseComplete = () => {
    setIsRedirecting(true);
    
    // Flash effect and redirect
    setTimeout(() => {
      // Replace with your actual redirect URL
      window.location.href = 'https://example.com/course';
    }, 1500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <Background />
      <Lighting />
      <Stage />
      <Cookie onCookieTapped={handleCookieTapped} />
      <Dialog show={showDialog} />
      <CourseCard show={showCourseCard} onComplete={handleCourseComplete} />
      
      {/* Enhanced redirect flash */}
      <AnimatePresence>
        {isRedirecting && (
          <motion.div
            className="fixed inset-0 bg-white z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 1.5, times: [0, 0.2, 1] }}
          />
        )}
      </AnimatePresence>
      
      {/* Enhanced title with perfect centering */}
      <motion.div
        className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 2 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-space-grotesk relative"
          style={{
            background: 'linear-gradient(45deg, #FF69B4, #00FFFF, #FFD700, #39FF14, #FF69B4)',
            backgroundSize: '400% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 6px 12px rgba(0,0,0,0.4)',
            filter: 'drop-shadow(0 0 20px rgba(255,105,180,0.3))'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Cookie Performance
          
          {/* Enhanced glint sweep effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            style={{
              transform: 'skewX(-15deg) translateX(-120%)',
              width: '40%'
            }}
            animate={{
              transform: [
                'skewX(-15deg) translateX(-120%)',
                'skewX(-15deg) translateX(420%)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-3xl font-nunito font-medium px-6"
          style={{
            color: '#E0D9FF',
            textShadow: '0 3px 6px rgba(0,0,0,0.5)'
          }}
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          An Interactive Experience
        </motion.p>
      </motion.div>
    </div>
  );
}

export default App;