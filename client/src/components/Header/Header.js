import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm Header'>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/add-question'>
            Add Question
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
