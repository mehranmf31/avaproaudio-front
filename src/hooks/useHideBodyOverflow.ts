import { useEffect } from 'react';

export const useHideBodyOverflow = (isHidden: boolean): void => {
  useEffect(() => {
    document.body.style.overflow = isHidden ? 'hidden' : 'unset';
  }, [isHidden]);
};
