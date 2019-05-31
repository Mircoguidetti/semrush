import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
      <div className="header__content">
        <NavLink className="header__title" to="/organic-keywords">
          <h1>SEMrush Api</h1>
        </NavLink> 
      </div>
  </header>
);

export default Header;