import React from 'react';
import './Annees.scss';
import PropTypes from 'prop-types';
import { majors } from '../../utils/img';

const Annees = ({ year, personnalYears }) => {
  return (
    <article className='annees-personnelles'>
      {
        personnalYears
          ? <ul className="list-annees">
            {
              personnalYears.map((value, index) =>
                <li key={index} className="annees">
                  <img src={majors[value]} alt={value} />
                  <p>{year + index}</p>
                  <p>{`${index} ${index > 1 ? 'ans' : 'an'}`}</p>
                </li>
              )
            }
            </ul>
          : <p>Entrez votre date de naissance dans l'onglet Arcanes ou Alliance</p>
      }
    </article>
  )
}

Annees.propTypes = {
  year: PropTypes.number,
  annees: PropTypes.array,
  majors: PropTypes.array.isRequired
}
export default Annees;