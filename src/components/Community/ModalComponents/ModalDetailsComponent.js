import React from 'react';

const ModalDetailsComponent = ({title, details}) => {

  return (
    <div>
      <span>{title}</span>
      <h3>{details}</h3>
    </div>
  );
};

export default ModalDetailsComponent;
