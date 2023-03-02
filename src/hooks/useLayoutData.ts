import { useRouter } from 'next/router';
import * as langData from '../constants/layoutData';

const useLayoutData = (): any => {
  const router = useRouter();

  return { ...langData[router.locale as keyof typeof langData] };
};

export default useLayoutData;
