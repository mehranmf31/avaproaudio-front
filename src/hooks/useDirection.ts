import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface DirectionRequestResult {
  isRtl: boolean;
}

export const useDirection = (): DirectionRequestResult => {
  const { locale } = useRouter();
  const isRtl = locale === 'fa';

  useEffect(() => {
    document.body.dir = isRtl ? 'rtl' : 'ltr';
  }, [isRtl, locale]);

  return {
    isRtl,
  };
};
