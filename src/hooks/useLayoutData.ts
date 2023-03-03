import { useRouter } from 'next/router';
import * as langData from '../constants/layoutData';

export const useLayoutData = (): any => {
  const router = useRouter();

  return { ...langData[router.locale as keyof typeof langData] };
};
