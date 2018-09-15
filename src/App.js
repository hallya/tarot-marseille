import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Header from './components/Header/header';
import Arcanes from './components/Arcanes/arcanes';
import Alliance from './components/Alliance/alliance';
import Miroirs from './components/Miroirs/miroirs';
import VoiesBoucles from './components/voies_boucles/voies_boucles'
import Annees from './components/Annees/annees'
import { getHouses, getMiroirs, getVoiesEtBoucles, getPersonnalYears } from './utils/utils';
import { Route, withRouter } from 'react-router-dom';
import { majors, minors } from './utils/img';

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
  majors,
  minors,
  activeTab: 'arcanes'
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
  firstSetHouses: [],
  secondSetHouses: [],
  day: undefined,
  month: undefined,
  year: undefined,
  dayPartner: undefined,
  monthPartner: undefined,
  yearPartner: undefined,
  majors,
  minors
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleUser = this.handleUser.bind(this);
  }
  componentDidMount() {
    if (this.state.activeTab !== this.props.location.pathname) {
      this.setState({ activeTab: this.props.location.pathname })
    }
  }
  componentDidUpdate() {
    if (this.state.activeTab !== this.props.location.pathname) {
      if (this.state.dependency !== this.props.location.pathname
        && ['/arcanes', '/alliance'].includes(this.props.location.pathname)) {
        this.resetArcanes();
      }
      this.setState({
        activeTab: this.props.location.pathname,
      })
    }
  }
  async handleUser(e) {
    const form = e.currentTarget.elements;
    e.preventDefault();
    if (form['birthdayPartner']) {
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
    if (form['currentYear'].value) {
      await this.setState({ currentYear: Number(form['currentYear'].value) })
    }
    await this.setState(getHouses(this.state));
    await Promise.all([
      this.setState(getMiroirs(this.state)),
      this.setState(getVoiesEtBoucles(this.state)),
      this.setState(getPersonnalYears(this.state.m6, this.state.year)),
      this.setState({dependency: this.props.location.pathname}),
    ])
  }

  resetArcanes() {
    this.setState(Object.assign(resetState, {dependency: this.props.location.pathname}));
  }
  render() {
    return (
      <div className="App">
        <Header activeTab={this.state.activeTab} />
        <main>
          <Route path={'/arcanes'} render={() => <Arcanes
            handleUser={this.handleUser}
            majors={this.state.majors}
            minors={this.state.minors}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            firstSetHouses={this.state.firstSetHouses}
            secondSetHouses={this.state.secondSetHouses}/>}
          />
          <Route path={'/alliance'} render={() => <Alliance
            handleUser={this.handleUser}
            majors={this.state.majors}
            minors={this.state.minors}
            state={this.state}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            firstnamePartner={this.state.firstnamePartner}
            lastnamePartner={this.state.lastnamePartner}
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            dayPartner={this.state.dayPartner}
            monthPartner={this.state.monthPartner}
            yearPartner={this.state.yearPartner}
            firstSetHouses={this.state.firstSetHouses}
            secondSetHouses={this.state.secondSetHouses}/>}
          />
          <Route path={'/miroirs-13'} render={() => <Miroirs
            miroirs={this.state.miroir13}
            majors={this.state.majors} />}
          />
          <Route path={'/miroirs-17'} render={() => <Miroirs
            miroirs={this.state.miroir17}
            majors={this.state.majors} />}
          />
          <Route path={'/miroirs-22'} render={() => <Miroirs
            miroirs={this.state.miroir22}
            majors={this.state.majors} />}
          />
          <Route path={'/voies-boucles'} render={() => <VoiesBoucles
            voies={this.state.voies}
            boucles={this.state.boucles}/>}
          />
          <Route path={'/annees-personnelles'} render={() => <Annees
            annees={this.state.personnalYears}
            year={this.state.year}
            majors={this.state.majors}/>}
          />
        </main>
        <footer>D'après les travaux de George Colleuil</footer>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(App);