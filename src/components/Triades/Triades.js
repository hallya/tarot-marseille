import React from 'react';
import PropTypes from 'prop-types';
import { majors } from 'Utils/img';
import './Triades.scss';

const Triades = ({ triades }) => {
  return (
    <ul className="list-triades">
      {
        triades.length
          ? triades.map((triade, index) => (
            <li key={index} className="triade">
              <figure>
                <picture>
                  <img src={majors[triade.card]} alt={`arcane numéro ${triade.card}`}/>
                </picture>
                <figcaption>{triade.message}</figcaption>
              </figure>
            </li>
          ))
          : <li className="triade">Pas de triade . . .</li>
      }
    </ul>
  )
}

Triades.propTypes = {
  triades: PropTypes.array
}

export default Triades;