import React from 'react';
import './Default.scss';

const Default = ({children}) => {
  return (
    <article className="default">
      {children}
    </article >
  )
}

export default Default;