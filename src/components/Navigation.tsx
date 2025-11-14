import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950/70 via-slate-900/70 to-slate-950/70 backdrop-blur-lg border-b border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
            >
              Preveen S
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 border ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600/40 to-cyan-600/40 border-blue-500/50 shadow-lg shadow-blue-500/30 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border-transparent hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/10 active:scale-95'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-blue-400 p-2 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-lg border-t border-blue-500/10">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 border ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-600/40 to-cyan-600/40 border-blue-500/50 shadow-lg shadow-blue-500/30 scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border-transparent hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/10 active:scale-95'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
