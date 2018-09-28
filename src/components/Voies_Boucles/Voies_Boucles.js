import React from 'react';
import './Voies_Boucles.scss';
import PropTypes from 'prop-types';

const VoiesEtBoucles = ({voies, boucles}) => { 
  return (
    <article className='voies-boucles'>
      {
        voies && <h2 className="voies" >Voies</h2>
      }
      {
        voies
          ? <ul className="list-voies">
              {
                voies.length
                  ? voies.map((voie, index) => <li key={index}>{voie}</li>)
                  : <li>Pas de voie . . .</li>
              }
            </ul>
          : <p>Entrez votre date de naissance dans l'onglet Arcanes ou Alliance</p>
      }
      {
        boucles && <h2 className="boucles">Boucles</h2>
      }
      {
        boucles
          && <ul className="list-boucles">
              {
                boucles.length
                  ? boucles.map((boucle, index) => <li key={index}>{boucle}</li>)
                  : <li>Pas de boucles . . .</li>
              }
            </ul>
      }
    </article>
  )
}

VoiesEtBoucles.propTypes = {
  voies: PropTypes.array,
  boucles: PropTypes.array,
}

export default VoiesEtBoucles;