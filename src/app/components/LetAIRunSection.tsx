import svgPaths from '@/imports/svg-smcghjdsc0';
import imgAmazon from "@/assets/577a972db39f89db16f9978922a5b92430ba4fdd.png";
import imgMeta from "@/assets/d0eda17d2d587db5ccb44f519a0898b0df025691.png";
import imgShopify from "@/assets/a182ee723ace7e10afb7f54221d71e8ca51255ba.png";
import imgGa4 from "@/assets/2410b0f822ad3c16497f5ea514316385c06b02c3.png";
import imgAd3FinalPng from "@/assets/f8c4b54676b4a4930e553dbdccb75cce33a41e7f.png";
import imgNextAd from "@/assets/5c63c0f840436128dd552d4284b0f79cc9a9c617.png";
import imgAdCreative from "@/assets/b6aaf09e13fe8b31f353557206561cc108fc224d.png";
import { imgContainer } from "@/imports/svg-iaprs";

export function LetAIRunSection() {
  return (
    <div className="relative w-full bg-[#1d1169] py-16 lg:py-20 px-8 lg:px-20 overflow-hidden">
      {/* Background Pattern SVG */}
      <div className="absolute inset-0 opacity-40">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2126 1217.34">
          <g opacity="0.4">
            <path d={svgPaths.p2671fa28} opacity="0.8" stroke="white" strokeWidth="1.02857" />
            <path d={svgPaths.p3d99f020} opacity="0.8" stroke="white" strokeWidth="1.02857" />
            <path d={svgPaths.p1f448c00} opacity="0.6" stroke="white" strokeDasharray="5.49 5.49" strokeWidth="0.685714" />
            <path d={svgPaths.p3e1f0e00} opacity="0.7" stroke="white" strokeDasharray="10.97 8.23" strokeWidth="0.685714" />
            <path d={svgPaths.p3b748800} opacity="0.6" stroke="white" strokeDasharray="6.86 10.97" strokeWidth="0.822857" />
            <path d={svgPaths.p3df07700} opacity="0.5" stroke="white" strokeWidth="0.685714" />
            <path d={svgPaths.p2c98eb80} opacity="0.4" stroke="white" strokeWidth="0.548571" />
            <path d={svgPaths.p2d1647c0} opacity="0.5" stroke="white" strokeDasharray="4.11 6.86" strokeWidth="0.685714" />
          </g>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Feature Cards */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            
            {/* Card 1: Manages all your accounts */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-3 w-full sm:max-w-md">
              <h3 className="text-white font-semibold text-lg mb-3 px-3">Manages all your accounts</h3>
              <div 
                className="relative h-32 rounded-xl overflow-hidden"
                style={{ 
                  WebkitMaskImage: `url('${imgContainer}')`,
                  maskImage: `url('${imgContainer}')`,
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat'
                }}
              >
                <div className="flex gap-4 items-center px-6">
                  {/* Amazon Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 min-w-[113px]">
                    <img src={imgAmazon} alt="Amazon" className="w-11 h-11 object-contain" />
                    <div className="bg-[#1d1169] text-white text-xs font-semibold px-6 py-2 rounded-full">
                      Connect
                    </div>
                  </div>
                  
                  {/* Google Ads Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 min-w-[113px]">
                    <div className="w-11 h-11 relative">
                      <svg className="block size-full" fill="none" viewBox="0 0 44.9559 40.3381">
                        <path d={svgPaths.p2e10daf0} fill="#FF4801" />
                        <path d={svgPaths.p2191780} fill="#4285F4" />
                        <path d={svgPaths.p3501f8f0} fill="#34A853" />
                      </svg>
                    </div>
                    <div className="text-[#1d1169] text-xs font-semibold px-6 py-2">
                      Connect
                    </div>
                  </div>
                  
                  {/* Meta Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 min-w-[113px]">
                    <img src={imgMeta} alt="Meta" className="w-11 h-11 object-contain" />
                    <div className="text-[#1d1169] text-xs font-semibold px-6 py-2">
                      Connect
                    </div>
                  </div>
                  
                  {/* Shopify Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 min-w-[113px]">
                    <img src={imgShopify} alt="Shopify" className="w-11 h-11 object-contain" />
                  </div>
                  
                  {/* GA4 Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 min-w-[113px]">
                    <img src={imgGa4} alt="GA4" className="w-11 h-11 object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Creatives optimization */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-3 w-full sm:max-w-md">
              <h3 className="text-white font-semibold text-lg mb-3 px-3">Creatives optimization</h3>
              <div className="relative h-44 rounded-xl overflow-hidden bg-white/5">
                {/* Stacked Ad Creatives */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Back card - blurred */}
                  <div className="absolute top-5 left-4 right-4 opacity-30">
                    <img src={imgAd3FinalPng} alt="" className="w-full rounded-lg shadow-xl" />
                  </div>
                  
                  {/* Middle card - less blurred */}
                  <div className="absolute top-3 left-2 right-2 opacity-60">
                    <img src={imgNextAd} alt="" className="w-full rounded-lg shadow-xl" />
                  </div>
                  
                  {/* Front card - active */}
                  <div className="relative z-10 mx-4">
                    <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200">
                      <img src={imgAdCreative} alt="" className="w-full" />
                      {/* ROAS and CPA badges */}
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                        <div className="backdrop-blur-md bg-white/90 rounded-lg px-3 py-1.5 shadow-md">
                          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">ROAS</div>
                          <div className="text-sm text-orange-600 font-bold">2.1x</div>
                        </div>
                        <div className="backdrop-blur-md bg-white/90 rounded-lg px-3 py-1.5 shadow-md">
                          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">CPA</div>
                          <div className="text-sm text-gray-900 font-bold">$25</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: 24/7 ROAS improvements */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 w-full sm:max-w-md">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <div className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">ROAS</div>
                  <div className="text-white text-2xl sm:text-3xl font-bold">3.1x</div>
                </div>
                <div className="flex gap-1 items-end h-6">
                  <div className="bg-white/40 w-3 h-1/5 rounded-t"></div>
                  <div className="bg-white/40 w-3 h-2/5 rounded-t"></div>
                  <div className="bg-white/40 w-3 h-1/4 rounded-t"></div>
                  <div className="bg-white/40 w-3 h-2/5 rounded-t"></div>
                  <div className="bg-white/40 w-3 h-1/3 rounded-t"></div>
                  <div className="bg-white/40 w-3 h-1/2 rounded-t"></div>
                  <div className="bg-white/60 w-3 h-3/4 rounded-t"></div>
                  <div className="bg-white w-3 h-full rounded-t"></div>
                </div>
              </div>
              <div className="text-white/90 text-sm">24/7 ROAS improvements</div>
            </div>

          </div>

          {/* Right Column - Heading and Form */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            {/* Heading */}
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              An AI Marketer that does all for you
            </h2>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center mt-0.5 sm:mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">1</span>
                </div>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  Find the right Intent Audience AND BEST marketing channel to maximise ROI
                </p>
              </div>

              <div className="flex gap-2 sm:gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center mt-0.5 sm:mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">2</span>
                </div>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  Create Messaging/Creatives that works best.
                </p>
              </div>

              <div className="flex gap-2 sm:gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center mt-0.5 sm:mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">3</span>
                </div>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  Audits and works 24X7 to yield best results for you
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="relative pt-2 sm:pt-4">
              <div className="bg-white rounded-full shadow-2xl flex items-center pr-1.5 pl-4 sm:pl-6 py-1.5">
                <input
                  type="email"
                  placeholder="work@email.com"
                  className="flex-1 bg-transparent text-sm sm:text-base text-gray-900 placeholder-gray-400 outline-none py-2"
                />
                <button className="bg-[#1d1169] hover:bg-[#2d1d89] text-white rounded-full px-2.5 sm:px-3 py-2 sm:py-2.5 transition-colors flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
                    <path d="M4.16667 10H15.8333" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
