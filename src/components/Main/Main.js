import React, { Component } from 'react';
import SubRouter from '../SubRouter/SubRouter';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
import { handleSubmit, getHouses, getMiroirs, getCheminsEtTriades, getPersonnalYears } from '../../utils/utils';
import { initialState } from '../../utils/states';

class Main extends Component {
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
      voiesEtBoucles = getCheminsEtTriades(houses.firstSetHouses.concat(houses.secondSetHouses)),
      personnalYears = getPersonnalYears(houses, infos),
      nextState = Object.assign({}, infos, houses, miroirs, voiesEtBoucles, personnalYears);
    
    this.setState(nextState);
  }

  render() {

    const { children } = this.props;
    
    return (
      <main className='arcane'>
        <SideBar getUsersInfos={this.getUsersInfos} {...this.props}>
          { children }
        </SideBar>
        <Content>
          <SubRouter {...this.state} {...this.props} />
        </Content>
      </main>
    );
  }
}

export default Main;