import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect,useState,useRef } from 'react';



const Header = () => {
   const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div>
    <header className="bg-[#1e293b] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-2">
  <img src="/images/LAYD.jpeg" alt="Logo" className="w-40 h-20" />
 
</div>
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm md:text-base text-white font-medium text-center">
          <a href="/legal-awareness" className="hover:text-blue-300 transition">Legal Awareness</a>
          <a href="/company-registration" className="hover:text-blue-300 transition leading-tight">
            Company Registrations <br /> and Appliances
          </a>
          <a href="/" className="hover:text-blue-300 transition leading-tight">
            Notary Service <br /> and Documentation
          </a>
          <a href="/" className="hover:text-blue-300 transition">IPR Filings</a>
          <a href="/" className="hover:text-blue-300 transition">Hire an Advocate</a>
          <a href="/" className="hover:text-blue-300 transition">Legal Help</a>
          {/*<a href="/" className="hover:text-blue-300 transition">My Account</a>*/}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-blue-300 transition"
            >
              My Account
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <Link
                  to="/signin"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
           
        </nav>
      </div>
    </header>
    
    </div>
  );
};

export default Header;




