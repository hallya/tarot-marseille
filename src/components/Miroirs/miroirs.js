import React from 'react';
import PropTypes from 'prop-types';
import { majors } from '../../utils/imgDB';
import './miroirs.scss';

const Miroirs = ({ miroirs, path }) => {
  const miroirType = path.match(/\d+/)[0];
  return (
    <article className='miroirs'>
      <h2>Miroirs à {miroirType}</h2>
      <ul className='miroirs'>
      { 
        miroirs[path].length
          ? miroirs[path].map((value, index) => (
            <li key={index}>
              {
                value.images.map((image, index) => <img src={majors[image]} className='miroir-image' key={index} alt="" />)
              }
              <p className='miroir-title' >{value.title}</p>
              <ul className='combinaison'>
                {
                  value.combinaisons.map((combinaison, index) => (
                    <li className='combinaison-maison' key={index}>{combinaison}</li>
                  ))
                }
              </ul>
            </li> ))
          : <li>Pas de miroir . . .</li>
      }
      </ul>
    </article>
  )
}

Miroirs.propTypes = {
  miroirs: PropTypes.object,
  majors: PropTypes.array,
}
export default Miroirs;