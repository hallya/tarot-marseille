import React from 'react';
import PropTypes from 'prop-types';
import { majors } from 'Utils/img';
import './Chemins.scss';

const Chemins = ({ chemins }) => {
  return (
    <ul className="list-chemins">
      {
        chemins.length
          ? chemins.map((chemin, index) => (
            <li key={index} className="chemin">
              <figure>
                <ul>
                {
                  chemin.path.map((img, index) => (
                    <li key={index} className="chemin-img">
                        <picture>
                          <img src={majors[img]} alt={`arcane numéro ${img}`}/>
                        </picture>
                    </li>
                  ))
                }
                </ul>
                <figcaption> {chemin.message} </figcaption>
              </figure>
            </li>
          ))
          : <li className="chemin">Pas de Chemins . . .</li>
      }
    </ul>
  )
}

Chemins.propTypes = {
  chemins: PropTypes.array
}

export default Chemins;