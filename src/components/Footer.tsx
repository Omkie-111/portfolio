import React from 'react';
import { Brain, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0F1419] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="h-6 w-6 text-[#00D9FF] mr-2" />
            <span className="text-lg font-bold">Om Pachauli</span>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-[#161A1F] hover:bg-[#00D9FF]/20 transition-colors duration-300 group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-[#00D9FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;