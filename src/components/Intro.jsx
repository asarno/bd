import React from 'react';
import intro from '../res/intro.mp4';

export const Intro = ({ onClick }) => (
  <video
    src={intro}
    onClick={onClick}
    autoPlay
    playsInline
    muted
    width='300'
    type='video/mp4'
  />
);