import React from 'react';
import PropTypes from 'prop-types';
import Chemins from '../Chemins/Chemins';
import Triades from '../Triades/Triades';
import './Chemins_Triades.scss';

const CheminsTriades = ({chemins, triades}) => { 
  return (
    <article className='chemins-triades'>
      <h2 className="chemins" >Chemins</h2>
      <Chemins chemins={chemins}/>
      <h2 className="triades">Triades</h2>
      <Triades triades={triades}/>
    </article>
  )
}

CheminsTriades.propTypes = {
  chemins: PropTypes.array,
  triades: PropTypes.array,
}

export default CheminsTriades;