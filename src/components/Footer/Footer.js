import React from 'react';
import printIcon from 'Assets/img/print.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <span>D'après les travaux de George Colleuil</span>
      <button onClick={()=> window.print()}>
        <img src={printIcon} alt="print this page"/>
      </button>
    </footer>
  )
}

export default Footer;