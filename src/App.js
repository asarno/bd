import { useCallback, useEffect, useState } from 'react';
import intro from './res/intro.mp4';
import outro from './res/outro.mp4';

import './index.css';

const Intro = ({ onClick }) => (
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

const Outro = () => {
  const onOutroEnd = useCallback(() => {
    const aTag = document.createElement('a');
    aTag.href = 'mailto:info@benigndelusion.com';
    aTag.click();
  }, []);

  useEffect(() => {
    document.getElementById('outro').addEventListener('ended', onOutroEnd);
  }, [onOutroEnd]);

  return (
    <video
      src={outro}
      id='outro'
      onClick={onOutroEnd}
      autoPlay
      playsInline
      muted
      width='300'
      type='video/mp4'
    />
  );
};

const App = () => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const onClick = useCallback(() => {
    setHasBeenClicked(true);
  }, [setHasBeenClicked]);

  return (
    <div className='container'>
      {hasBeenClicked && <Outro />}
      <Intro onClick={onClick} />
    </div>
  );
};

export default App;
