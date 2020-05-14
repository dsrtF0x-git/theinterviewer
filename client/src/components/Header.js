import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link exact to="/">Home</Link>
        </li>
        <li>
          <Link exact to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
