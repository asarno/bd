import React from 'react';
import intro from '../res/intro2.gif';

export const Intro = ({ onClick }) => (
  <img
    src={intro}
    onClick={onClick}
    width='300'
    alt='intro'
  />
);