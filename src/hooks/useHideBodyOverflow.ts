import { useEffect } from 'react';

const useHideBodyOverflow = (isHidden: boolean): void => {
  useEffect(() => {
    document.body.style.overflow = isHidden ? 'hidden' : 'unset';
  }, [isHidden]);
};

export default useHideBodyOverflow;
