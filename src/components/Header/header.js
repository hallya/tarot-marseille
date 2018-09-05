import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = ({activeTab}) => {
  return (
    <header>
      <nav>
        <ul>
          <li className={activeTab === '/arcanes' ? 'selected':''}>
            <Link to='/arcanes'>Arcanes</Link>
          </li>
          <li className={activeTab === '/alliance' ? 'selected':''}>
            <Link to='/alliance'>Alliance</Link>
          </li>
          <li className={activeTab === '/miroirs-13' ? 'selected':''}>
            <Link to='/miroirs-13'>Miroirs 13</Link>
          </li>
          <li className={activeTab === '/miroirs-17' ? 'selected':''}>
            <Link to='/miroirs-17'>Miroirs 17</Link>
          </li>
          <li className={activeTab === '/miroirs-22' ? 'selected':''}>
            <Link to='/miroirs-22'>Miroirs 22</Link>
          </li>
          <li className={activeTab === '/voies-boucles' ? 'selected':''}>
            <Link to='/voies-boucles'>Voies & boucles</Link>
          </li>
          <li className={activeTab === '/annees-personnelles' ? 'selected':''}>
            <Link to='/annees-personnelles'>Années personnelles</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;