import { useCallback, useEffect, useState } from 'react';
import { Intro, Outro } from './components'
import { detectBrowser } from './helpers';

const App = () => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  useEffect(() => detectBrowser(), []);

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
