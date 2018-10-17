import React from 'react';

const Maison = ({cardPath, houseNumber}) => (
  <li key={`maison ${houseNumber}`} className={`m${houseNumber}`}>
      <figure>
          <picture>  
            <img src={cardPath} alt='' />
          </picture>
          <figcaption className='description'>
            {`Maison ${houseNumber}`}
          </figcaption>
      </figure>
  </li>
);

export default Maison;