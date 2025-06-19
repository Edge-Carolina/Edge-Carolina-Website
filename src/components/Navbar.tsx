import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import edgeLogo from '../assets/edge.ico';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-lightnavy transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 justify-between md:justify-start">
          {/* Left side: Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={edgeLogo} alt="Edge Carolina Logo" className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
            </div>
            <Link to="/" className="ml-1 sm:ml-2 md:ml-3 text-terqoizse text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold">
              Edge Carolina
            </Link>
          </div>

          {/* Navigation Links (desktop only) */}
          <div className="hidden md:block ml-4">
            <div className="flex items-baseline space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8">
              <Link
                to="/about"
                className="text-terqoizse px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium transition-colors duration-300 hover:bg-terqoizse hover:text-lightnavy"
              >
                About Us
              </Link>
              <Link
                to="/mission"
                className="text-terqoizse px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium transition-colors duration-300 hover:bg-terqoizse hover:text-lightnavy"
              >
                Core Mission
              </Link>
              <Link
                to="/events"
                className="text-terqoizse px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium transition-colors duration-300 hover:bg-terqoizse hover:text-lightnavy"
              >
                Upcoming Events
              </Link>
            </div>
          </div>

          {/* Mobile menu button (right on mobile) */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-terqoizse inline-flex items-center justify-center p-1 sm:p-1.5 md:p-2 rounded-md focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="block h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden${isMobileMenuOpen ? '' : ' hidden'}`} id="mobile-menu">
        <div className="px-1 sm:px-2 md:px-3 pt-1 sm:pt-2 pb-2 sm:pb-3 space-y-0.5 sm:space-y-1">
          <Link
            to="/about"
            className="text-terqoizse block px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium hover:bg-terqoizse hover:text-lightnavy"
          >
            About Us
          </Link>
          <Link
            to="/mission"
            className="text-terqoizse block px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium hover:bg-terqoizse hover:text-lightnavy"
          >
            Core Mission
          </Link>
          <Link
            to="/events"
            className="text-terqoizse block px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium hover:bg-terqoizse hover:text-lightnavy"
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 