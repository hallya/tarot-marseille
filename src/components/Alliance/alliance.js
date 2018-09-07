import React from 'react';
import './alliance.scss';
import PropTypes from 'prop-types';
import UserField from 'Components/User/fieldset';
import Cards from 'Components/Cards/cards';

const Alliance = (props) => {
  const
    { yearPartner, handleUser } = props,
    slideAndShow = yearPartner === undefined ? 'hide-arcanes' : '',
    shadowAnimation = yearPartner !== undefined ? 'anim-shadow' : '',
    showDescription = yearPartner !== undefined ? 'show-description' : '';

  return (
    <main className='arcane'>
      <section className='settings'>
        <form onSubmit={handleUser}>
          <UserField firstname={'firstname'} lastname={'lastname'} birthday={'birthday'}/>
          <br />
          <UserField firstname={'firstnamePartner'} lastname={'lastnamePartner'} birthday={'birthdayPartner'}/>
          <br/>
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

Alliance.propTypes = {
  handleUser: PropTypes.func,
  majors: PropTypes.array.isRequired,
  minors: PropTypes.array.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstnamePartner: PropTypes.string.isRequired,
  lastnamePartner: PropTypes.string.isRequired,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  dayPartner: PropTypes.number,
  monthPartner: PropTypes.number,
  yearPartner: PropTypes.number,
  firstSetHouses: PropTypes.array,
  secondSetHouses: PropTypes.array,
}

export default Alliance;