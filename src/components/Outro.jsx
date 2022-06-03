import { useCallback, useEffect} from 'react';
import outro from '../res/outro2.gif';

export const Outro = () => {
  const onOutroEnd = useCallback(() => {
    const aTag = document.createElement('a');
    aTag.href = 'mailto:info@benigndelusion.com';
    aTag.click();
  }, []);

  useEffect(() => {
    setTimeout(() => onOutroEnd(), 3000);
  }, [onOutroEnd]);

  return (
    <img
      src={outro}
      id='outro'
      onClick={onOutroEnd}
      width='300'
      alt='outro'
    />
  );
};