import React from 'react';
import { NavLink } from 'react-router-dom';
import { subRoutes } from './config';
import Form from '../Form/Form';
import './SideNav.scss';

const SideNav = (props) => (
  <section className="sidenav">
    <Form {...props}>
      { props.children }
    </Form>
    <nav>
      <ul className="sidenav">
        {
          subRoutes.map(({ path, name }) => (
            <li key={`link${path}`}>
              <NavLink  activeClassName="rendered" to={props.match.url + path}>
                {name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  </section>
)

export default SideNav;