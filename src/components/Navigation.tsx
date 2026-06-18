import { useEffect, useState } from 'react';
import { Menu, X, Bird } from 'lucide-react';
import { navItems } from '@/data/mockData';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-2">
            <Bird className={`w-8 h-8 ${isScrolled ? 'text-wetland-600' : 'text-white'}`} />
            <span
              className={`font-serif text-xl md:text-2xl font-bold ${
                isScrolled ? 'text-wetland-700' : 'text-white text-shadow-md'
              }`}
            >
              湿地鸟类民俗节
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-sunset-500 ${
                  isScrolled ? 'text-lake-700' : 'text-white text-shadow-md'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-wetland-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-wetland-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-100 border-t border-wetland-200">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleNavClick}
                className="block py-3 text-lake-700 font-medium hover:text-sunset-500 border-b border-wetland-100 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
