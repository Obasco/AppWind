import { useState } from "react";
import logo from "./assets/logo.svg";
import menu from "./assets/menu.png";
import xicon from "./assets/x.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full shadow backdrop-blur-sm bg-white/70 z-50">
      <div className=" flex items-center justify-between px-6 py-4 lg:px-12">
        
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" height={140} width={120} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-between w-full">
          {/* Menu Center */}
          <ul className="flex gap-10 font-sans text-lg font-medium text-slate-400 cursor-pointer mx-auto">
            <li className="hover:text-violet-500">Features</li>
            <li className="hover:text-violet-500">About</li>
            <li className="hover:text-violet-500">Pricing</li>
            <li className="hover:text-violet-500">Reviews</li>
            <li className="hover:text-violet-500">Contact</li>
            <li className="hover:text-violet-500">Pages</li>
          </ul>

          {/* Button right */}
          <button className="bg-violet-500 text-white px-6 py-3 rounded-md">
            <a href="/">Download</a>
          </button>
        </nav>

        {/* Tablet Nav (md to lg) */}
        <nav className="hidden md:flex lg:hidden flex-col items-center gap-4">
          <ul className="flex gap-6 font-sans text-base font-medium text-slate-600 cursor-pointer">
            <li className="hover:text-violet-500">Features</li>
            <li className="hover:text-violet-500">About</li>
            <li className="hover:text-violet-500">Pricing</li>
            <li className="hover:text-violet-500">Reviews</li>
            <li className="hover:text-violet-500">Contact</li>
            <li className="hover:text-violet-500">Pages</li>
          </ul>
          <button className="bg-violet-500 text-white px-5 py-2 rounded-md">
            <a href="/">Download</a>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img src={xicon} alt="close" height={28} width={28} />
          ) : (
            <img src={menu} alt="menu" height={28} width={28} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md w-full">
          <ul className="flex flex-col gap-6 px-6 py-4 font-sans text-lg font-medium text-slate-600">
            <li className="hover:text-violet-500">Features</li>
            <li className="hover:text-violet-500">About</li>
            <li className="hover:text-violet-500">Pricing</li>
            <li className="hover:text-violet-500">Reviews</li>
            <li className="hover:text-violet-500">Contact</li>
            <li className="hover:text-violet-500">Pages</li>
          </ul>
          <div className="px-6 pb-4">
            <button className="w-full bg-violet-500 text-white px-6 py-3 rounded-md">
              <a href="/">Download</a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
