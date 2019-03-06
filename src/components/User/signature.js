import React from 'react';
import PropTypes from 'prop-types';

const Signature = ({firstname, lastname, day, month, year, currentYear}) => (
  <p>
    {firstname} {lastname}
    <br />
    né(e) le {day}.{month}.{year}
    <br />
    Année Courante: { currentYear }
  </p>
)

Signature.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number
}
export default Signature;