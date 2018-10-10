import React from 'react';
import PropTypes from 'prop-types';
import { majors } from 'Utils/img';
import './Voies.scss';

const Voies = ({ voies }) => {
  return (
    <ul className="list-voies">
      {
        voies.length
          ? voies.map((voie, index) => (
            <li key={index} className="voie">
              <figure>
                <ul>
                {
                  voie.path.map((img, index) => (
                    <li key={index} className="voie-img">
                        <picture>
                          <img src={majors[img]} alt={`arcane numéro ${img}`}/>
                        </picture>
                    </li>
                  ))
                }
                </ul>
                <figcaption> {voie.message} </figcaption>
              </figure>
            </li>
          ))
          : <li className="voie">Pas de voie . . .</li>
      }
    </ul>
  )
}

Voies.propTypes = {
  voies: PropTypes.array
}

export default Voies;