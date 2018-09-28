import React, { Component } from 'react';
import UserField from '../User/fieldset';
import SubRouter from '../SubRouter/SubRouter';
import { handleSubmit, getHouses, getMiroirs, getVoiesEtBoucles } from '../../utils/utils';
import { initialState } from '../../utils/states';
import './Alliance.scss';
import SideNav from '../SideNav/SideNav';



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
    this.setState(nextState);
  }
  render() {
    return (
      <main className='arcane'>
        <SideNav {...this.props} getUsersInfos={this.getUsersInfos}>
          <UserField firstname={'firstname'} lastname={'lastname'} birthday={'birthday'} />
          <UserField firstname={'firstnamePartner'} lastname={'lastnamePartner'} birthday={'birthdayPartner'} />
        </SideNav>
        <SubRouter {...this.state} {...this.props}/>
        {/* <Cards
          slideAndShow={this.state.yearPartner === undefined ? 'hide-arcanes' : ''}
          shadowAnimation={this.state.yearPartner !== undefined ? 'anim-shadow' : ''}
          showDescription={this.state.yearPartner !== undefined ? 'show-description' : ''}
          firstSetHouses={this.state.firstSetHouses}
          secondSetHouses={this.state.secondSetHouses}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          firstnamePartner={this.state.firstnamePartner}
          lastnamePartner={this.state.lastnamePartner}
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
          dayPartner={this.state.dayPartner}
          monthPartner={this.state.monthPartner}
          yearPartner={this.state.yearPartner}/> */}
      </main>
    );
  }
}

export default Alliance;