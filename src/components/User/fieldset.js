import React from 'react';
import PropTypes from 'prop-types';

const UserField = ({firstname, lastname, birthday}) => (
  <fieldset>
    <input className='user' type='text' autoComplete='given-name' name={firstname} placeholder='Prénom'></input>
    <input className='user' type='text' autoComplete='family-name' name={lastname} placeholder='Nom'></input>
    <input required className='user' type='date' name={birthday} min="0001-01-01" max="9999-12-31" placeholder="jj/mm/aaaa"></input>
  </fieldset>
)

UserField.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired
}

export default UserField;