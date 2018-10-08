import React from 'react';
import PropTypes from 'prop-types';
import Voies from '../Voies/Voies';
import Boucles from '../Boucles/Boucles';
import './Voies_Boucles.scss';

const VoiesEtBoucles = ({voies, boucles}) => { 
  return (
    <article className='voies-boucles'>
      <h2 className="voies" >Voies</h2>
      <Voies voies={voies}/>
      <h2 className="boucles">Boucles</h2>
      <Boucles boucles={boucles}/>
    </article>
  )
}

VoiesEtBoucles.propTypes = {
  voies: PropTypes.array,
  boucles: PropTypes.array,
}

export default VoiesEtBoucles;