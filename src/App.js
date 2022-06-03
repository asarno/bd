import { useCallback, useEffect, useState } from 'react';
import intro from './res/intro.mp4';
import outro from './res/outro.mp4';

import './index.css';

const Intro = ({ onClick }) => (
  <video onClick={onClick} autoPlay muted width='300'>
    <source src={intro} type='video/mp4' />
  </video>
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
    <video id='outro' autoPlay muted width='300'>
      <source src={outro} type='video/mp4' />
    </video>
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
