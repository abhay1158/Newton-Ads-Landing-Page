import { useState, useEffect } from 'react';
import { Search, MessageCircle, ShieldCheck, Phone, Sparkles, ArrowRight, Check, Music, Tv, Monitor, Smartphone, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const agents = [
  {
    id: 'social',
    name: 'Social',
    icon: MessageCircle,
    title: 'Social Media Advertising',
    description: 'Dominate social platforms with precision-targeted campaigns on Snapchat, Instagram, Facebook, and TikTok. Newton\'s AI maximizes ROI by placing your ads in front of the right audience at exactly the right moment—turning scrolls into sales.',
    image: 'https://images.unsplash.com/photo-1636516214833-3377b36bdcb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFwY2hhdCUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc2OTQ1OTY5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Snapchat Ads', 'Instagram Stories & Reels', 'Facebook Campaigns', 'TikTok Advertising'],
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: Music,
    title: 'Audio Advertising',
    description: 'Reach millions of engaged listeners through Spotify, podcasts, and streaming radio. Our AI-powered targeting delivers your message during peak listening moments, creating memorable brand experiences that convert.',
    image: 'https://images.unsplash.com/photo-1551817958-795f9440ce4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG90aWZ5JTIwbXVzaWMlMjBzdHJlYW1pbmd8ZW58MXx8fHwxNzY5NDU5NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Spotify Audio Ads', 'Podcast Sponsorships', 'Streaming Radio Spots', 'Behavioral Targeting'],
  },
  {
    id: 'ctv',
    name: 'CTV',
    icon: Tv,
    title: 'Connected TV Advertising',
    description: 'Capture attention on the biggest screen in the house. Newton places your brand on premium streaming platforms and smart TVs, delivering non-skippable, high-impact ads to engaged viewers in a lean-back environment.',
    image: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHR2JTIwc3RyZWFtaW5nfGVufDF8fHx8MTc2OTQ1OTY5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Smart TV Advertising', 'OTT Platforms (Netflix, Hulu)', 'Premium Streaming Services', 'Advanced Audience Targeting'],
  },
  {
    id: 'in-app',
    name: 'In-App',
    icon: Smartphone,
    title: 'In-App Advertising',
    description: 'Connect with users inside their favorite mobile apps using AppLovin\'s cutting-edge Axon AI technology. We identify high-intent moments within gaming, shopping, and lifestyle apps to drive installs, purchases, and engagement.',
    image: 'https://images.unsplash.com/photo-1730818875087-182c15e1e7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwaG9uZXxlbnwxfHx8fDE3Njk0MzkxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AppLovin Axon AI', 'Mobile Gaming Ads', 'App Install Campaigns', 'Rewarded Video Ads'],
  },
  {
    id: 'web',
    name: 'Web',
    icon: Globe,
    title: 'Web Advertising',
    description: 'Own the internet with display ads, native content, and intelligent retargeting powered by Media.net\'s global network. Newton ensures your brand appears across premium publishers, driving traffic and conversions at scale.',
    image: 'https://images.unsplash.com/photo-1762330464824-21e95b769038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGlnaXRhbCUyMGFkdmVydGlzaW5nfGVufDF8fHx8MTc2OTQ1OTY5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Media.net Premium Network', 'Programmatic Display Ads', 'Native Advertising', 'Dynamic Retargeting'],
  },
  {
    id: 'd-ooh',
    name: 'D-OOH',
    icon: Monitor,
    title: 'Digital Out-of-Home Advertising',
    description: 'Make a statement in the real world with digital billboards, transit ads, and interactive displays via Adonmo. Newton uses real-time data—foot traffic, weather, events—to optimize placements and maximize brand visibility.',
    image: 'https://images.unsplash.com/photo-1763671727638-5bc55bb9c980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmlsbGJvYXJkJTIwb3V0ZG9vcnxlbnwxfHx8fDE3Njk0NTk2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Adonmo Smart Billboards', 'Transit & Metro Advertising', 'Mall & Retail Displays', 'Real-Time Optimization'],
  },
];

export function AIAgentsSection() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle through agents
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % agents.length;
        setSelectedAgent(agents[nextIndex]);
        return nextIndex;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Safety check
  if (!selectedAgent) {
    return null;
  }

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            All Marketing Channels<br className="hidden sm:block" /><span className="sm:hidden"> </span>Just One Prompt Away
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-gradient-to-r from-[#1D1169] to-[#4D3D99] text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full mb-4 md:mb-6 lg:mb-8 shadow-lg"
          >
            <span className="font-semibold text-sm sm:text-base md:text-lg">No Agency • No In-House Team Required</span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Newton drives engagement, sales, and conversions when people are most likely to convert.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left Sidebar - Channel Navigation */}
          <div className="w-full lg:w-[240px] flex lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              const isActive = selectedAgent.id === agent.id;
              
              return (
                <motion.button
                  key={agent.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedAgent(agent);
                    setCurrentIndex(index);
                  }}
                  className={`flex items-center gap-3 lg:gap-4 px-4 py-3 lg:px-6 lg:py-5 rounded-xl lg:rounded-2xl text-left transition-all duration-500 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1D1169] to-[#2D1D89] shadow-xl scale-105'
                      : 'bg-white hover:bg-gray-50 hover:shadow-lg hover:scale-102'
                  }`}
                >
                  <motion.div
                    animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? 'text-white' : 'text-[#1D1169]'
                      }`}
                    />
                  </motion.div>
                  <span
                    className={`font-semibold text-base lg:text-lg ${
                      isActive ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {agent.name}
                  </span>
                  {isActive && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4 }}
                      className="absolute bottom-0 left-0 h-1 bg-white/40 rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="flex-1 bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16">
                <motion.div
                  key={selectedAgent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="inline-block bg-[#1D1169]/10 text-[#1D1169] px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                    <span className="font-semibold text-xs md:text-sm uppercase tracking-wider">
                      {selectedAgent.name} Channel
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                    {selectedAgent.title}
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-10">
                    {selectedAgent.description}
                  </p>
                  <button className="bg-gradient-to-r from-[#1D1169] to-[#2D1D89] hover:from-[#2D1D89] hover:to-[#3D2D99] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto">
                    <span className="text-sm sm:text-base md:text-lg">Grow Exponentially with Us</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </motion.div>
              </div>

              {/* Right Visualization */}
              <div className="w-full lg:w-[480px] bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <motion.div
                  key={selectedAgent.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Channel Image */}
                  <div className="rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6 lg:mb-8 border-2 lg:border-4 border-white">
                    <ImageWithFallback
                      src={selectedAgent.image}
                      alt={selectedAgent.title}
                      className="w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover"
                    />
                  </div>

                  {/* Features Card */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-gradient-to-br from-[#1D1169] to-[#2D1D89] rounded-xl lg:rounded-2xl shadow-2xl p-5 sm:p-6 lg:p-8"
                  >
                    <h4 className="text-white font-bold mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                      Key Features
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {selectedAgent.features?.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                          className="flex items-center gap-3 sm:gap-4"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 shadow-lg shadow-green-400/50" />
                          <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
