import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAutoCloseMenu = (isOpen: boolean, onClose: () => void) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, onClose]);
};
