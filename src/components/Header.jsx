import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        <h1 className="text-2xl font-bold">Adirek</h1>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex items-center space-x-4">
          <ScrollLink to="home" smooth={true} duration={500} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 cursor-pointer">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 cursor-pointer">About</ScrollLink>
          <ScrollLink to="portfolio" smooth={true} duration={500} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 cursor-pointer">Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 cursor-pointer">Contact</ScrollLink>
        </nav>
        <a href="mailto:Adirek.n2020@gmail.com" className="hidden lg:block text-gray-600">Adirek.n2020@gmail.com</a>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <ScrollLink to="home" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-gray-900 cursor-pointer">Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-gray-900 cursor-pointer">About</ScrollLink>
            <ScrollLink to="portfolio" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-gray-900 cursor-pointer">Projects</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-gray-900 cursor-pointer">Contact</ScrollLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;