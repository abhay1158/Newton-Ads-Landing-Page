import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import newtonLogo from "figma:asset/9063bd8409de3b61622e0f31610eb12be6c393de.png";

const profileImages = [
  "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1580643375398-5174902ebcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1667556205536-e5b04ee97ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1717068342175-c3a303a09f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200&fit=crop",
];

function TypingText() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Let AI run your ads';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setDisplayText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="font-['Inter:Medium',sans-serif] text-[12px] sm:text-[13px] lg:text-[14px] text-black">
      {displayText}
      <span className="inline-block w-[2px] h-[12px] sm:h-[13px] lg:h-[14px] bg-[#1D1169] ml-1 animate-pulse" />
    </p>
  );
}

export function NewHeroSection() {
  const [radius, setRadius] = useState(220);
  const [profileSize, setProfileSize] = useState(40);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(120);
        setProfileSize(24);
      } else if (window.innerWidth < 1024) {
        setRadius(170);
        setProfileSize(32);
      } else {
        setRadius(220);
        setProfileSize(40);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className="relative w-full bg-white py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
            <h1 className="font-['Inter:Black',sans-serif] font-black text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-2px] md:tracking-[-3px] text-black">
              AI Agent for{' '}
              <span className="text-[#1D1169]">Performance Marketing</span>
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#71717b]">
              Reach 5 Billion Audience at any touchpoint possible, drive sales and acquire users
            </p>
            
            {/* CTA Form */}
            <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 md:px-6 py-3 md:py-3.5 rounded-lg border border-black text-[14px] md:text-[16px] font-['Inter:Regular',sans-serif] outline-none focus:ring-2 focus:ring-[#1D1169]"
              />
              <button className="bg-black hover:bg-[#1D1169] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-['Inter:Medium',sans-serif] text-[14px] md:text-[16px] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                Get started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Animated Circle with Profiles */}
          <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[600px]">
            {/* Circular Gradient Background - Static */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(13, 5, 57, 0.15) 0%, rgba(13, 5, 57, 0.1) 25%, rgba(13, 5, 57, 0.06) 45%, rgba(13, 5, 57, 0.03) 65%, rgba(13, 5, 57, 0.01) 80%, transparent 100%)`,
                }}
              />
            </div>

            {/* Floating Profile Images - positioned absolutely around center */}
            {profileImages.map((img, index) => {
              const totalProfiles = profileImages.length;
              const angle = (index / totalProfiles) * Math.PI * 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 sm:border-3 lg:border-4 border-white shadow-xl bg-white z-10"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{
                    x: x - profileSize,
                    y: y - profileSize,
                  }}
                  animate={{
                    x: [x - profileSize, x - profileSize + Math.cos(angle) * 10, x - profileSize],
                    y: [y - profileSize, y - profileSize + Math.sin(angle) * 10, y - profileSize],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3 + (index * 0.2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                >
                  <img 
                    src={img} 
                    alt={`Profile ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}

            {/* Central Circle with Brand Color */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <div
                className="relative bg-[#1D1169] rounded-full flex items-center justify-center w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[100px] lg:h-[100px]"
              >
                {/* First pulse ring effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[#1D1169]"
                  animate={{
                    scale: [1, 1.5, 2.2, 2.8],
                    opacity: [0, 0.6, 0.3, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: [0.25, 0.1, 0.25, 1],
                    times: [0, 0.3, 0.65, 1],
                  }}
                />
                {/* Second pulse ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[#1D1169]"
                  animate={{
                    scale: [1, 1.5, 2.2, 2.8],
                    opacity: [0, 0.5, 0.25, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: [0.25, 0.1, 0.25, 1],
                    times: [0, 0.3, 0.65, 1],
                    delay: 1.2,
                  }}
                />
                {/* Third pulse ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[#1D1169]"
                  animate={{
                    scale: [1, 1.5, 2.2, 2.8],
                    opacity: [0, 0.4, 0.2, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: [0.25, 0.1, 0.25, 1],
                    times: [0, 0.3, 0.65, 1],
                    delay: 2.4,
                  }}
                />
                {/* Newton Logo */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center z-10">
                  <img 
                    src={newtonLogo} 
                    alt="Newton Logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Chat bubble with typing animation */}
            <motion.div
              className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-xl lg:rounded-2xl shadow-xl px-4 py-3 sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] z-30 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1D1169] rounded-full flex-shrink-0" />
                <div className="overflow-hidden flex-1">
                  <TypingText />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
