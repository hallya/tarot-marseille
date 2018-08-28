import React from 'react';
import './voies_boucles.scss';

const VoiesEtBoucles = ({voies, boucles}) => { 
  return (
    <section className='voies-boucles'>
      {
        voies && <h2 className="voies" >Voies</h2>
      }
      {
        voies
          ? <ul className="list-voies">
              {
                voies.length
                  ? voies.map((voie, index) => <li key={index}>{voie}</li>)
                  : 'Pas de voie . . .'
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
                  : 'Pas de boucles . . .'
              }
            </ul>
      }
    </section>
  )
}

export default VoiesEtBoucles;