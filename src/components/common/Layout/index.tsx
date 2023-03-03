import { Header } from '../Header';
import { useRouter } from 'next/router';
import { Footer } from '@/components/common';
import { useLayoutData, useDirection } from '@/hooks';
import { locales } from '@/constants/locales';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { header, footer } = useLayoutData();
  const { locale } = useRouter();

  useDirection();

  return (
    <>
      <Header navLinks={header.navLinks} locales={locales} locale={locale ?? 'en'} />
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
