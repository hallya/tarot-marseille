import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="selected" to='/solitaire'>Solitaire</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to='/alliance'>Alliance</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;