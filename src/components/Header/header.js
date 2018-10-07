import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

const Header = () =>(
  <header>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="selected" to='/individuel'>Individuel</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to='/alliance'>Alliance</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;