import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li id='arcanes' onClick={() => props.goToTab('arcanes')} className={props.activeTab.arcanes ? 'selected':''}><Link to='/tarot-marseille'>Arcanes</Link></li>
          <li id='alliance' onClick={() => props.goToTab('alliance')} className={props.activeTab.alliance ? 'selected':''}><Link to='/alliance'>Alliance</Link></li>
          <li id='miroirs13' onClick={() => props.goToTab('miroirs13')} className={props.activeTab.miroirs13 ? 'selected':''}><Link to='/miroirs-13'>Miroirs 13</Link></li>
          <li id='miroirs17' onClick={() => props.goToTab('miroirs17')} className={props.activeTab.miroirs17 ? 'selected':''}><Link to='/miroirs-17'>Miroirs 17</Link></li>
          <li id='miroirs22' onClick={() => props.goToTab('miroirs22')} className={props.activeTab.miroirs22 ? 'selected':''}><Link to='/miroirs-22'>Miroirs 22</Link></li>
          <li id='voies' onClick={() => props.goToTab('voies')} className={props.activeTab.voies ? 'selected':''}><Link to='/voies-boucles'>Voies & boucles</Link></li>
          <li id='anneesPersonnelles' onClick={() => props.goToTab('anneesPersonnelles')} className={props.activeTab.anneesPersonnelles ? 'selected':''}><Link to='/annees-personnelles'>Années personnelles</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;