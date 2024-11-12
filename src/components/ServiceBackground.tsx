import React from 'react';
import { motion } from 'framer-motion';

interface ServiceBackgroundProps {
  type: 'video' | 'audio' | 'image' | 'content' | 'analytics' | 'automation';
}

const ServiceBackground: React.FC<ServiceBackgroundProps> = ({ type }) => {
  const getBackgroundImage = () => {
    switch (type) {
      case 'video':
        return 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1';
      case 'audio':
        return 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04';
      case 'image':
        return 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e';
      case 'content':
        return 'https://images.unsplash.com/photo-1455390582262-044cdead277a';
      case 'analytics':
        return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71';
      case 'automation':
        return 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a';
      default:
        return 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485';
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${getBackgroundImage()}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black to-black" />
      
      {/* Animated SVG Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Additional decorative elements */}
        <div className="absolute inset-0 grid grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-500 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Video-specific animated elements */}
        {type === 'video' && (
          <>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <pattern
                  id="grid"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 8 0 L 0 0 0 8"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </motion.div>
            
            {/* Floating video frames */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`frame-${i}`}
                className="absolute w-16 h-9 border-2 border-purple-500/20 rounded-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${15 + (i * 10)}%`,
                  top: `${20 + (i * 8)}%`,
                }}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ServiceBackground;