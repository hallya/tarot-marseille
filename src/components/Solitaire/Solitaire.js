import React, { Component } from 'react';
import SubRouter from '../SubRouter/SubRouter';
import UserField from '../User/fieldset';
import SideNav from '../SideNav/SideNav';
import Content from '../Content/Content';
import { handleSubmit, getHouses, getMiroirs, getVoiesEtBoucles, getPersonnalYears } from '../../utils/utils';
import { initialState } from '../../utils/states';
import './Solitaire.scss';

class Solitaire extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.getUsersInfos = this.getUsersInfos.bind(this);
  }
  
  getUsersInfos(e) {
    const
      infos = handleSubmit(e),
      houses = getHouses(infos),
      miroirs = getMiroirs(houses),
      voiesEtBoucles = getVoiesEtBoucles(houses),
      personnalYears = getPersonnalYears(houses, infos),
      nextState = Object.assign({}, infos, houses, miroirs, voiesEtBoucles, personnalYears);
    
    this.props.history.push('/#' + this.props.match.url + '/arcanes');
    
    this.setState(nextState);
  }

  render() {
    return (
      <main className='arcane'>
        <SideNav getUsersInfos={this.getUsersInfos} {...this.props}>
          <UserField firstname={'firstname'} lastname={'lastname'} birthday={'birthday'} />
        </SideNav>
        <Content>
          <SubRouter {...this.state} {...this.props}/>
        </Content>
      </main>
    );
  }
}

export default Solitaire;