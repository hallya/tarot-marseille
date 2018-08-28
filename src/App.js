import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/header';
import Cards from './components/Cards/cards';
import Alliance from './components/Alliance/alliance';
import Miroirs from './components/Miroirs/miroirs';
import VoiesBoucles from './components/voies_boucles/voies_boucles'
import Annees from './components/Annees/annees'
import { getHouses, getMiroirs, getVoiesEtBoucles, getPersonnalYears } from './utils/utils';
import { Route } from 'react-router-dom';
import bg from "Assets/img/background.jpg";
import assets from './utils/img';

const initialState = {
  firstname: '',
  lastname: '',
  firstnamePartner: '',
  lastnamePartner: '',
  m1: undefined,
  m2: undefined,
  m3: undefined,
  m4: undefined,
  m5: undefined,
  m6: undefined,
  m7: undefined,
  m8: undefined,
  m9: undefined,
  m10: undefined,
  m11: undefined,
  m12: undefined,
  m13: undefined,
  m14: undefined,
  day: undefined,
  month: undefined,
  year: undefined,
  dayPartner: undefined,
  monthPartner: undefined,
  yearPartner: undefined,
  cards: assets.majors,
  minors: assets.minors,
  activeTab: {
    arcanes: false,
    alliance: false,
    voies: false,
    miroirs13: false,
    miroirs17: false,
    miroirs22: false,
    anneesPersonnelles: false
  }
}
const resetState = {
  firstname: '',
  lastname: '',
  firstnamePartner: '',
  lastnamePartner: '',
  m1: undefined,
  m2: undefined,
  m3: undefined,
  m4: undefined,
  m5: undefined,
  m6: undefined,
  m7: undefined,
  m8: undefined,
  m9: undefined,
  m10: undefined,
  m11: undefined,
  m12: undefined,
  m13: undefined,
  m14: undefined,
  day: undefined,
  month: undefined,
  year: undefined,
  dayPartner: undefined,
  monthPartner: undefined,
  yearPartner: undefined,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleUser = this.handleUser.bind(this);
    this.goToTab = this.goToTab.bind(this);
  }

  async handleUser(e) {
    const form = e.currentTarget.elements;
    e.preventDefault();
    if (this.state.year || this.state.yearPartner) {
      this.resetArcanes();
    }
    if (form.length > 5) {
      let [yearPartner, monthPartner, dayPartner] = await form['birthdayPartner'].value.split('-').map(value => Number(value));
      await this.setState({
        firstnamePartner: form['firstnamePartner'].value,
        lastnamePartner: form['lastnamePartner'].value,
        yearPartner,
        monthPartner,
        dayPartner
      })
    }
    let  [year, month, day] = form['birthday'].value.split('-').map(value => Number(value)),
      date = new Date();

    year = year && year.toString().length > 4 ? year.toString().slice(1) : year;
    await this.setState({
      firstname: form['firstname'].value,
      lastname: form['lastname'].value,
      birthday: form['birthday'].value,
      currentYear: date.getFullYear(),
      year,
      month,
      day,
      miroir13: [],
      miroir17: [],
      miroir22: []
    })
    await this.setState(getHouses(this.state));
    if (form['currentYear'].value) {
      await this.setState({ currentYear: Number(form['currentYear'].value) })
      return await this.setState(getHouses(this.state))
    }
    await this.setState(getMiroirs(this.state));
    await this.setState(getVoiesEtBoucles(this.state));
    await this.setState(getPersonnalYears(this.state.m6, this.state.year))
  }

  goToTab (tab) {
    let newState = {
        arcanes: false,
        miroirs13: false,
        miroirs17: false,
        miroirs22: false,
        voies: false,
        anneesPersonnelles: false
    };
    newState[tab] = !newState[tab];
    this.setState({ activeTab: newState });
  }

  resetArcanes() {
    this.setState(resetState);
  }
  render() {
    return (
      <div className="App">
        <Header activeTab={this.state.activeTab} goToTab={this.goToTab} />
        <Route exact path='/taro-test' render={() => <Cards
          handleUser={this.handleUser}
          state={this.state}
          zoomCard={this.zoomCard} />}
        />
        <Route exact path='/alliance' render={() => <Alliance
          handleUser={this.handleUser}
          state={this.state}
          resetUser={this.resetUser}
          zoomCard={this.zoomCard} />}
        />
        <Route exact path='/miroirs-13' render={() => <Miroirs
          miroirs={this.state.miroir13}
          cards={this.state.cards} />}
        />
        <Route exact path='/miroirs-17' render={() => <Miroirs
          miroirs={this.state.miroir17}
          cards={this.state.cards} />}
        />
        <Route exact path='/miroirs-22' render={() => <Miroirs
          miroirs={this.state.miroir22}
          cards={this.state.cards} />}
        />
        <Route exact path='/voies-boucles' render={() => <VoiesBoucles
          voies={this.state.voies}
          boucles={this.state.boucles}/>}
        />
        <Route exact path='/annees-personnelles' render={() => <Annees
          annees={this.state.personnalYears}
          year={this.state.year}
          cards={this.state.cards}/>}
        />
        <img id='background' src={bg} alt="background" />
        <footer>D'après les travaux de George Colleuil</footer>
      </div>
    );
  }
}

export default App;