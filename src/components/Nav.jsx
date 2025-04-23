import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const mobileMenu = (
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
      <ul className='text-center text-xl p-10 text-white'>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-200 rounded'>
          <Link to="/home" onClick={handleClick}>Home</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 rounded'>
          <Link to="/movie" onClick={handleClick}>Movies</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 rounded'>
          <Link to="/favorites" onClick={handleClick}>Favorites</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 rounded'>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className='relative'>
      <div className='flex justify-between items-center z-50 text-white lg:py-5 px-6 py-4'>
        <div className='text-3xl font-bold'>Demo</div>

        <div className='hidden md:flex lg:flex lg:flex-1 items-center justify-end font-normal'>
          <ul className='flex gap-8 mr-16 text-[18px]'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/movie">Movies</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className='md:hidden'>
          <button className='transition text-2xl' onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </div>

      {click && mobileMenu}
    </nav>
  );
};

export default Nav;
