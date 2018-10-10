import React from 'react';
import PropTypes from 'prop-types';
import { majors } from 'Utils/img';
import './Boucles.scss';

const Boucles = ({ boucles }) => {
  return (
    <ul className="list-boucles">
      {
        boucles.length
          ? boucles.map((boucle, index) => (
            <li key={index} className="boucle">
              <figure>
                <picture>
                  <img src={majors[boucle.card]} alt={`arcane numéro ${boucle.card}`}/>
                </picture>
                <figcaption>{boucle.message}</figcaption>
              </figure>
            </li>
          ))
          : <li className="boucle">Pas de boucles . . .</li>
      }
    </ul>
  )
}

Boucles.propTypes = {
  Boucles: PropTypes.array
}

export default Boucles;