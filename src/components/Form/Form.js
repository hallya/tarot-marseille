import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = (props) => {
  const { getUsersInfos, currentYear, children } = props;
  return (
    <article className='settings'>
      <form onSubmit={getUsersInfos}>
        { children }
        <input className='user' type='number' name='currentYear' placeholder={currentYear}></input>
        <button className='user' type="submit">Valider</button>
      </form>
    </article>
  )
}
Form.propTypes = {
  getUsersInfos: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
export default Form;