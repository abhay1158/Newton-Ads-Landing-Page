import { useState } from 'react';
import imgLogo from "figma:asset/c77004efb67f03f2b3566e6d00e9bab76356ce27.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={imgLogo} 
              alt="Newton" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <a 
              href="#home" 
              className="text-gray-900 hover:text-[#1d1169] font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href="#why-we" 
              className="text-gray-900 hover:text-[#1d1169] font-medium transition-colors"
            >
              Why we?
            </a>
            <a 
              href="#get-started" 
              className="bg-[#1d1169] hover:bg-[#2d1d89] text-white font-medium px-6 py-2.5 rounded-full transition-colors"
            >
              Get started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              className="w-6 h-6 text-gray-900" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-gray-900 hover:text-[#1d1169] font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#why-we" 
                className="text-gray-900 hover:text-[#1d1169] font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why we?
              </a>
              <a 
                href="#get-started" 
                className="bg-[#1d1169] hover:bg-[#2d1d89] text-white font-medium px-6 py-2.5 rounded-full transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
