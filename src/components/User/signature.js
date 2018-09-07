import React from 'react';
import PropTypes from 'prop-types';

const Signature = ({firstname, lastname, day, month, year}) => (
  <p className='fullname' >
    {firstname} {lastname}
    <br />
    né(e) le {day}.{month}.{year}
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