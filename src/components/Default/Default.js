import React from 'react';
import Message from '../Message/Message';
import './Default.scss';

const Default = (props) => {
  console.log(props)
  return (
    <article className="default">
      <Message>
        {
          'Entrez votre date de naissance'
        }
      </Message>
    </article >
  )
}

export default Default;