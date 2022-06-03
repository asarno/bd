import { useCallback, useEffect} from 'react';
import outro from '../res/outro.mp4';

export const Outro = () => {
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