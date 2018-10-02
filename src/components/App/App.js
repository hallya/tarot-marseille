import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/header';
import Router from '../Router/Router';
import Footer from '../Footer/Footer';

class App extends Component {
  componentDidMount() {
    window.addEventListener('WebComponentsReady', function() {
      var form = document.querySelector('iron-form');

      form.addEventListener('iron-form-submit', function() {
        alert('Form submitted with date: ' + form.serializeForm().date);
        return false;
      });

      var button = document.querySelector('vaadin-button');
      button.addEventListener('click', function() {
        form.submit();
      });
    });
  }
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