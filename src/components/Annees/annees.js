import React from 'react';
import './annees.scss';
import PropTypes from 'prop-types';

const Annees = ({year, annees, majors}) => { 
  return (
    <section className='annees-personnelles'>
      {
        annees
          ? <ul className="list-annees">
            {
              annees.map((value, index) =>
                <li key={index} className="annees">
                  <img src={majors[value]} alt={value} />
                  <p>{year + index}</p>
                  <p>{`${index} an${index > 1 ? 's' : ''}`}</p>
                </li>
              )
            }
            </ul>
          : <p>Entrez votre date de naissance dans l'onglet Arcanes ou Alliance</p>
      }
    </section>
  )
}

Annees.propTypes = {
  year: PropTypes.string,
  annees: PropTypes.array,
  majors: PropTypes.array.isRequired
}
export default Annees;