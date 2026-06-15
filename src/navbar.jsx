import React from 'react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg bg-[#BFD4DB]/90 backdrop-blur-md border border-[#96B9D0] rounded-full px-3 py-2 shadow-[0_12px_40px_rgba(120,162,204,0.25)] flex items-center justify-between font-sans transition-all duration-300">

      <div className="flex items-center space-x-1 md:space-x-2">
        <button
          onClick={() => scrollToSection('section-1')}
          className="px-3 md:px-4 py-2 text-xs md:text-sm text-[#1B354D] hover:text-[#14263B] transition-colors font-medium rounded-full hover:bg-[#AECBD6]"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection('section-3')}
          className="px-3 md:px-4 py-2 text-xs md:text-sm text-[#1B354D] hover:text-[#14263B] transition-colors font-medium rounded-full hover:bg-[#AECBD6]"
        >
          Sejarah
        </button>

        <button
          onClick={() => scrollToSection('section-5')}
          className="px-3 md:px-4 py-2 text-xs md:text-sm text-[#1B354D] hover:text-[#14263B] transition-colors font-medium rounded-full hover:bg-[#AECBD6]"
        >
          Quiz
        </button>

        <button
          onClick={() => scrollToSection('section-6')}
          className="px-3 md:px-4 py-2 text-xs md:text-sm text-[#1B354D] hover:text-[#14263B] transition-colors font-medium rounded-full hover:bg-[#AECBD6]"
        >
          Kesimpulan
        </button>
      </div>

      <button
        onClick={() => scrollToSection('section-1')}
        className="px-4 md:px-5 py-2 bg-[#78A2CC] hover:bg-[#88AED0] text-[#14263B] font-bold text-xs md:text-sm rounded-full transition-all duration-200 shadow-md shadow-[#78A2CC]/20 active:scale-95 whitespace-nowrap"
      >
        Ke Atas ↑
      </button>

    </nav>
  );
};

export default Navbar;