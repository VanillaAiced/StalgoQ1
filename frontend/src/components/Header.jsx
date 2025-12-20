import React from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import logo from './images/mscpfp.jpg';
import MenuModal from './MenuModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuModalOpen, setMenuModalOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isMenuPage = location.pathname === '/menu';

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (isMenuPage) {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const isScrolled = scrollY > 100;
  const titleScale = Math.max(0.3, 1 - scrollY / 500);
  const titleOpacity = scrollY < 400 ? 1 : Math.max(0, 1 - (scrollY - 400) / 200);
  const headerOpacity = isMenuPage ? 1 : (scrollY > 300 ? Math.min(1, (scrollY - 300) / 200) : 0);

  return (
    <>
      {/* Compact header bar */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 backdrop-blur-md border-b border-white/10"
        style={{ 
          opacity: headerOpacity,
          backgroundColor: '#0C2039'
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Left side - Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Midnight Sun Café" className="h-20 w-20 object-cover" />
              <span className="text-2xl font-black tracking-widest text-white" style={{ fontFamily: "'Futura PT', 'Futura', sans-serif", fontWeight: 800 }}>
                Midnight Sun Café
              </span>
            </Link>
            
            {/* Center - Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-semibold text-white hover:text-white/70 transition-colors uppercase tracking-wide">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-semibold text-white hover:text-white/70 transition-colors uppercase tracking-wide">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-semibold text-white hover:text-white/70 transition-colors uppercase tracking-wide">
                Gallery
              </button>
              <button onClick={() => setMenuModalOpen(true)} className="text-sm font-semibold text-white hover:text-white/70 transition-colors uppercase tracking-wide">
                Menu
              </button>
              <button onClick={() => scrollToSection('location')} className="text-sm font-semibold text-white hover:text-white/70 transition-colors uppercase tracking-wide">
                Contact
              </button>
            </nav>
            
            {/* Right side - Action buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://www.facebook.com/midnightsuncafe23" target="_blank" rel="noopener noreferrer" className="text-xs italic text-white hover:opacity-70 transition-opacity">
                Follow us on <span className="font-semibold not-italic">Facebook</span>
              </a>
              <button onClick={() => alert('Brewing something Special')} className="text-xs font-black tracking-widest uppercase px-6 py-2.5 bg-white text-[#0C2039] rounded-full hover:bg-gray-200 transition-colors" style={{ fontFamily: "'Futura PT', 'Futura', sans-serif", fontWeight: 800 }}>
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-white/10">
              <button onClick={() => scrollToSection('hero')} className="text-left text-sm font-semibold text-white hover:opacity-70 transition-opacity">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-sm font-semibold text-white hover:opacity-70 transition-opacity">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-sm font-semibold text-white hover:opacity-70 transition-opacity">
                Gallery
              </button>
              <button onClick={() => { setMenuModalOpen(true); setIsMenuOpen(false); }} className="text-left text-sm font-semibold text-white hover:opacity-70 transition-opacity">
                Menu
              </button>
              <button onClick={() => scrollToSection('location')} className="text-left text-sm font-semibold text-white hover:opacity-70 transition-opacity">
                Contact
              </button>
            </nav>
          )}
        </div>
      </header>
      <MenuModal isOpen={menuModalOpen} onClose={() => setMenuModalOpen(false)} />
    </>
  );
}
