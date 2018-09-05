import React from 'react';
import './miroirs.scss';

const Miroirs13 = ({miroirs, majors}) => {
  return (
    <section className='miroirs'>
      {
        miroirs
          ? <ul className='miroirs'>
            {
              miroirs.length
                ? miroirs.map((value, index) => (
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
          : <p>Entrez votre date de naissance dans l'onglet Arcanes ou Alliance</p>
      }
    </section>
  )
}

export default Miroirs13;