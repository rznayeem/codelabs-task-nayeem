import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/media/logo dark.png';
import arrow from '../../assets/media/Arrow 1.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="max-w-[1160px] mx-auto flex items-center justify-between py-5 px-4 md:px-0">
      <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
        <img src={logo} alt="Logo" />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul
        className={`lg:flex items-center gap-6 ${
          isMenuOpen
            ? 'absolute flex-col top-16 right-5 bg-[#343268] text-white z-50 gap-3 p-7 rounded-xl transition-all space-y-3'
            : 'hidden'
        }`}
      >
        <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
          Home
        </li>
        <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
          Services
        </li>
        <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
          Blogs
        </li>
        <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
          About Us
        </li>
      </ul>
      <div className="hidden lg:flex">
        <button className="flex items-center gap-2 font-medium rounded-xl border py-[14px] px-7 border-[#343268]">
          Appointment <img src={arrow} alt="Arrow" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
