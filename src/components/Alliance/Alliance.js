import React, { Component } from 'react';
import UserField from '../User/fieldset';
import SubRouter from '../SubRouter/SubRouter';
import { handleSubmit, getHouses, getMiroirs, getVoiesEtBoucles } from '../../utils/utils';
import { initialState } from '../../utils/states';
import './Alliance.scss';
import SideNav from '../SideNav/SideNav';
import Content from '../Content/Content';

class Alliance extends Component {

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
      nextState = Object.assign({}, infos, houses, miroirs, voiesEtBoucles);
    
    this.props.history.push('/#' + this.props.match.url + '/arcanes');
    
    this.setState(nextState);
  }
  render() {
    return (
      <main className='arcane'>
        <SideNav  getUsersInfos={this.getUsersInfos} {...this.props}>
          <UserField firstname={'firstname'} lastname={'lastname'} birthday={'birthday'} />
          <UserField firstname={'firstnamePartner'} lastname={'lastnamePartner'} birthday={'birthdayPartner'} />
        </SideNav>
        <Content>
          <SubRouter {...this.state} {...this.props}/>
        </Content>
      </main>
    );
  }
}

export default Alliance;