import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/header';
import Router from '../Router/Router';
import Footer from '../Footer/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router currentYear={new Date().getFullYear()} />
        <Footer />
      </div>
    );
  }
}

export default App;