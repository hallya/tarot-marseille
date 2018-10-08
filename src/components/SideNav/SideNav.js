import React from 'react';
import { NavLink } from 'react-router-dom';
import { subRoutes } from './config';
import './SideNav.scss';

const SideNav = ({match}) => (
  <nav>
    <ul className="sidenav">
      {
        subRoutes.map(({ path, name }) => (
          match.url === '/alliance' && path === '/annees-personnelle'
          ? null
          : <li key={`link${path}`}>
              <NavLink  activeClassName="rendered" to={match.url + path}>
                {name}
              </NavLink>
            </li>
        ))
      }
    </ul>
  </nav>
)

export default SideNav;