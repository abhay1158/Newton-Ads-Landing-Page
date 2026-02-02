import Main from '@/imports/Main';
import { Navigation } from '@/app/components/Navigation';
import { NewHeroSection } from '@/app/components/NewHeroSection';
import { AIAgentsSection } from '@/app/components/AIAgentsSection';
import { LetAIRunSection } from '@/app/components/LetAIRunSection';

export default function App() {
  return (
    <div className="relative w-full bg-white">
      {/* Global CSS to override brand color and hide original hero */}
      <style>{`
        /* Override all #FF4801 colors with #1D1169 */
        .text-\\[\\#ff4801\\],
        span[class*="text-[#ff4801]"] {
          color: #1D1169 !important;
        }
        .bg-\\[\\#ff4801\\],
        div[class*="bg-[#ff4801]"] {
          background-color: #1D1169 !important;
        }
        .border-\\[\\#ff4801\\],
        div[class*="border-[#ff4801]"] {
          border-color: #1D1169 !important;
        }
        
        /* Mobile responsive adjustments for imported components */
        @media (max-width: 767px) {
          /* Scale down large text on mobile */
          div[data-name="Main"] h1,
          div[data-name="Main"] h2 {
            font-size: clamp(24px, 6vw, 48px) !important;
          }
          
          /* Make testimonial cards stack better on mobile */
          div[data-name="Main"] > div.top-\\[1348\\.27px\\] > div > div {
            flex-direction: column !important;
            gap: 20px !important;
          }
          
          /* Adjust logo sizes on mobile */
          div[data-name="Main"] img {
            max-height: 32px !important;
          }
        }
        
        /* Hide the original hero section - it's the first absolute positioned Background div */
        div[data-name="Main"] > div.absolute.bg-white.top-0[data-name="Background"] {
          display: none !important;
        }
        
        /* Adjust Main container */
        div[data-name="Main"] {
          min-height: auto !important;
        }
        
        /* Since sections use absolute positioning with top values, we need to adjust them to flow sequentially */
        div[data-name="Main"] > div[data-name="Section"] {
          position: relative !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
        }
        
        /* Make Main container flex to support internal ordering */
        div[data-name="Main"] {
          display: flex !important;
          flex-direction: column !important;
        }
        
        /* Wall of Love section at top: 1348.27px - place it first */
        div[data-name="Main"] > div.top-\\[1348\\.27px\\] {
          order: 1;
          background: white !important;
          padding-top: 80px !important;
          padding-bottom: 80px !important;
        }
        
        /* Remove excessive padding from Wall of Love */
        div[data-name="Main"] > div.top-\\[1348\\.27px\\] > div {
          padding-left: 20px !important;
          padding-right: 20px !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        
        @media (min-width: 640px) {
          div[data-name="Main"] > div.top-\\[1348\\.27px\\] > div {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
        }
        
        @media (min-width: 1024px) {
          div[data-name="Main"] > div.top-\\[1348\\.27px\\] > div {
            padding-left: 80px !important;
            padding-right: 80px !important;
          }
        }
        
        /* Hide stars and ratings in Wall of Love section - target by data-name */
        div[data-name="G2 Stars"],
        div[data-name="Trustpilot Stars"],
        div[data-name="G2"],
        div[data-name="Trustpilot"],
        div[data-name="stars-trustpilot.svg fill"] {
          display: none !important;
        }
        
        /* Hide any image containing stars */
        img[src*="G2Stars"],
        img[src*="ClutchStars"],
        img[src*="stars"],
        img[src*="Trustpilot"] {
          display: none !important;
        }
        
        /* Hide the black testimonial card with Ryze text */
        div[data-name="Heading 3"] {
          display: none !important;
        }
        
        /* Logo strip section at top: 1513.45px - place it second */
        div[data-name="Main"] > div.top-\\[1513\\.45px\\] {
          order: 2;
          background: white !important;
          padding-top: 40px !important;
          padding-bottom: 40px !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
        
        @media (min-width: 768px) {
          div[data-name="Main"] > div.top-\\[1513\\.45px\\] {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
        }
        
        /* AI Agents section - place it third */
        #ai-agents-section {
          order: 3;
          background: white !important;
        }
        
        /* Hide original Let AI Run Your Ads section at top: 4755.81px - we're replacing it */
        div[data-name="Main"] > div.top-\\[4755\\.81px\\] {
          display: none !important;
        }
        
        /* New Let AI Run Section - place it fourth (after AI Agents) */
        #let-ai-run-section {
          order: 4;
        }

        /* Keep visible: Logo strip (2000+ CLIENTS) at top: 1513.45px, Wall of Love at top: 1348.27px */
        
        /* Hide Section at top: 2535.25px - gradient section */
        div[data-name="Main"] > div.top-\\[2535\\.25px\\] {
          display: none !important;
        }
        
        /* Hide Section at top: 3486.25px - AI marketer section */
        div[data-name="Main"] > div.top-\\[3486\\.25px\\] {
          display: none !important;
        }
        
        /* Hide Section at top: 3957.25px - Manages all accounts section */
        div[data-name="Main"] > div.top-\\[3957\\.25px\\] {
          display: none !important;
        }
        
        /* Hide BackgroundHorizontalBorder elements */
        div[data-name="Main"] > div[data-name="Background+HorizontalBorder"] {
          display: none !important;
        }

        /* Fix Clutch Stars alignment - remove negative top positioning that causes overlap */
        div[data-name="Clutch Stars"] {
          top: 0px !important;
        }

        /* Ensure proper spacing for all star rating components in testimonials */
        div[data-name="G2 Stars"],
        div[data-name="Trustpilot Stars"] {
          z-index: 10 !important;
        }
        
        /* Remove unnecessary background colors from testimonial cards */
        div[data-name="Main"] div[data-name="Background+Border+Shadow"] {
          background: white !important;
        }
        
        /* Remove gray backgrounds from avatar backgrounds */
        div[data-name="Main"] div.bg-\\[\\#e4e4e7\\],
        div[data-name="Main"] div.bg-\\[\\#f3f4f6\\] {
          background: white !important;
        }
        
        /* Remove all unnecessary spacing and padding */
        body {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Ensure no gaps between sections */
        div[data-name="Main"] > * {
          margin: 0 !important;
        }
      `}</style>
      
      {/* Text content replacement for Ryze to Newton */}
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function replaceText() {
            // Replace Ryze text in all text nodes
            const walker = document.createTreeWalker(
              document.body,
              NodeFilter.SHOW_TEXT,
              null
            );
            
            let node;
            const nodesToReplace = [];
            while (node = walker.nextNode()) {
              if (node.nodeValue && (node.nodeValue.includes('Ryze') || node.nodeValue.includes('ryze') || node.nodeValue.includes('RYZE'))) {
                nodesToReplace.push(node);
              }
            }
            
            nodesToReplace.forEach(node => {
              node.nodeValue = node.nodeValue
                // First, remove "Ryze's" or "Newton's" from the specific testimonial text
                .replace(/[""]?(Ryze's|Newton's|RYZE'S|NEWTON)\s+AI-driven ads outperform/gi, "\\"AI-driven ads outperform")
                // Then handle other Ryze replacements
                .replace(/RYZE'S/gi, "NEWTON")
                .replace(/Ryze's/g, "Newton")
                .replace(/RYZE/g, "NEWTON")
                .replace(/Ryze/g, "Newton")
                .replace(/ryze/g, "newton")
                .replace(/get-ryze\\.ai/g, "newton-ai.com");
            });
          }
          
          // Run immediately
          replaceText();
          
          // Run on DOM load
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', replaceText);
          }
          
          // Run after a short delay to catch dynamically loaded content
          setTimeout(replaceText, 100);
          setTimeout(replaceText, 500);
          setTimeout(replaceText, 1000);
          
          // Observe DOM changes
          const observer = new MutationObserver(replaceText);
          observer.observe(document.body, { childList: true, subtree: true });
        })();
      `}} />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content with padding for fixed nav */}
      <div className="pt-16 sm:pt-20">
        {/* New Hero Section */}
        <NewHeroSection />
      
        {/* Original Main content - contains Wall of Love and Logo Strip */}
        <Main />
      
        {/* AI Agents Section */}
        <div id="ai-agents-section">
          <AIAgentsSection />
        </div>
      
        {/* New Let AI Run Your Ads Section */}
        <div id="let-ai-run-section">
          <LetAIRunSection />
        </div>
      </div>
    </div>
  );
}
