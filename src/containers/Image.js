import React from 'react';
import img from '../images/headshot.jpg';

const Image = () => {
  return (
    <img src={img} alt="headshot" width={561.6} height={374.4} mode='fill' /> 
  );
};

export default Image