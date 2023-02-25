import { Navbar } from '../Navbar';
import { useRouter } from 'next/router';
import { Footer } from '@/components/common/Footer';
import useTranslation from '@/hooks/useTranslation';
import useDirection from '@/hooks/useDirection';
import { locales } from '@/constants/locales';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { header, footer } = useTranslation();
  const { locale } = useRouter();

  useDirection();

  return (
    <>
      <Navbar navLinks={header.navLinks} locales={locales} locale={locale ?? 'en'} />
      <main>{children}</main>
      <Footer
        productLinks={footer?.productLinks}
        topLinks={footer?.topLinks}
        contactLinks={footer?.contactLinks}
        socialLinks={footer?.socialLinks}
      />
    </>
  );
};
