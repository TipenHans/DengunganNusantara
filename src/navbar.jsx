import React, { useState } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const primaryMenus = [
    { id: 'section-1', label: 'Home' },
    { id: 'section-2', label: 'Galeri' },
    { id: 'section-3', label: 'Sejarah' },
  ];

  const secondaryMenus = [
    { id: 'section-4', label: 'Pembuatan Gong' },
    { id: 'section-5', label: 'Quiz' },
    { id: 'section-6', label: 'Kesimpulan' },
    { id: 'section-8', label: 'Profil' },
  ];

  const handleMobileClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-4xl font-sans">
      <div 
        className={`md:hidden absolute bottom-16 right-0 w-48 bg-[#BFD4DB]/95 backdrop-blur-lg border border-[#96B9D0] rounded-2xl p-2 shadow-xl transition-all duration-300 ease-in-out origin-bottom-right transform ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-1">
          {secondaryMenus.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMobileClick(item.id)}
              className="px-3 py-2 text-left text-xs text-[#1B354D] hover:text-[#14263B] font-medium rounded-xl hover:bg-[#AECBD6] transition-colors"
            >
              • {item.label}
            </button>
          ))}
        </div>
      </div>

      <nav className="w-full bg-[#BFD4DB]/90 backdrop-blur-md border border-[#96B9D0] rounded-full px-3 py-2 shadow-[0_12px_40px_rgba(120,162,204,0.25)] flex items-center justify-between gap-1">
        <div className="flex items-center space-x-1 text-xs md:text-sm">
          {primaryMenus.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-2.5 md:px-4 py-1.5 text-[#1B354D] hover:text-[#14263B] transition-colors font-semibold rounded-full hover:bg-[#AECBD6] whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}

          <div className="hidden md:flex items-center space-x-1">
            {secondaryMenus.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 text-[#1B354D] hover:text-[#14263B] transition-colors font-medium rounded-full hover:bg-[#AECBD6] whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-between w-5 h-3.5 mx-1 text-[#1B354D] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 w-full bg-[#1B354D] rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 w-full bg-[#1B354D] rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-[#1B354D] rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>

          <button 
            onClick={() => scrollToSection('section-1')} 
            className="px-3.5 md:px-5 py-2 bg-[#78A2CC] hover:bg-[#88AED0] text-[#14263B] font-bold text-xs md:text-sm rounded-full transition-all duration-200 shadow-md shadow-[#78A2CC]/20 active:scale-95 whitespace-nowrap"
          >
            Ke Atas ↑
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;