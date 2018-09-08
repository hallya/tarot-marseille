import React from 'react';
import './arcanes.scss';
import PropTypes from 'prop-types';
import UserField from 'Components/User/fieldset';
import Cards from 'Components/Cards/cards';

const Arcanes = (props) => {
  const
    { handleUser, year } = props,
    slideAndShow = year === undefined ? 'hide-arcanes' : '',
    shadowAnimation = year !== undefined ? 'anim-shadow' : '',
    showDescription = year !== undefined ? 'show-description' : '';

  return (
    <main className='arcane'>
      <section className='settings'>
        <form onSubmit={handleUser}>
          <UserField firstname={'firstname'} lastname={'lastname'} birthday={'birthday'}/>
          <input className='user' type='number' name='currentYear' placeholder={new Date().getFullYear()}></input>
          <button className='user' type="submit">Valider</button>
        </form>
      </section>
      <Cards
        slideAndShow={slideAndShow}
        shadowAnimation={shadowAnimation}
        showDescription={showDescription}
        {...props} />
    </main>
  );  
}

Arcanes.propTypes = {
  handleUser: PropTypes.func,
  majors: PropTypes.array.isRequired,
  minors: PropTypes.array.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  firstSetHouses: PropTypes.array,
  secondSetHouses: PropTypes.array,
}
export default Arcanes;