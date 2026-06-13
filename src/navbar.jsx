import React from 'react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-stone-900/80 backdrop-blur-md border border-stone-800/60 rounded-full px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-center justify-between font-sans transition-all duration-300">

      <div className="flex items-center space-x-1 md:space-x-2">
        <button 
          onClick={() => scrollToSection('section-1')} 
          className="px-3 md:px-4 py-2 text-xs md:text-sm text-stone-400 hover:text-amber-500 transition-colors font-medium rounded-full hover:bg-stone-800/30"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('section-3')} 
          className="px-3 md:px-4 py-2 text-xs md:text-sm text-stone-400 hover:text-amber-500 transition-colors font-medium rounded-full hover:bg-stone-800/30"
        >
          Sejarah
        </button>
        <button 
          onClick={() => scrollToSection('section-5')} 
          className="px-3 md:px-4 py-2 text-xs md:text-sm text-stone-400 hover:text-amber-500 transition-colors font-medium rounded-full hover:bg-stone-800/30"
        >
          Quiz
        </button>
        <button 
          onClick={() => scrollToSection('section-6')} 
          className="px-3 md:px-4 py-2 text-xs md:text-sm text-stone-400 hover:text-amber-500 transition-colors font-medium rounded-full hover:bg-stone-800/30"
        >
          Kesimpulan
        </button>
      </div>

      <button 
        onClick={() => scrollToSection('section-1')} 
        className="px-4 md:px-5 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs md:text-sm rounded-full transition-all duration-200 shadow-md shadow-amber-600/10 active:scale-95 whitespace-nowrap"
      >
        Ke Atas ↑
      </button>

    </nav>
  );
};

export default Navbar;