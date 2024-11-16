import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Regular function to toggle the menu
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-gray-800 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? (
              <span>&#10005;</span> // Close icon (X)
            ) : (
              <span>&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>

        {/* Logo (Optional) */}
        <div className="text-white text-2xl font-semibold">
          <a href="/">Doctor App</a>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            <li>
              <a href="/" className="text-white hover:text-yellow-500">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-yellow-500">About</a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-yellow-500">Services</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-yellow-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;


