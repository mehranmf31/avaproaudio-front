import { useRouter } from 'next/router';
import * as langData from '../constants/locales';

const useTranslation = (): any => {
  const router = useRouter();

  return { ...langData[router.locale as keyof typeof langData] };
};

export default useTranslation;
