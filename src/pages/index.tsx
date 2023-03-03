import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { DISTRIBUTORS } from '@/constants/appRoutes';
import { WhereToBuyBanner } from '@/components/distributors';
import { Container } from '@/components/ui';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>AVA PRO AUDIO</title>
        <meta name="description" content="AVA PRO AUDIO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="my-9">
        <h1 className="text-3xl">AVA PRO AUDIO</h1>
        <p className="text-normal">Home Page!</p>
      </Container>
      <WhereToBuyBanner
        title={t('whereToBuyTitle')}
        description={t('whereToBuyDescription')}
        distributors={[
          { label: t('whereToBuyOnlineShopLabel'), link: 'https://www.kalasys.com/' },
          { label: t('whereToBuyDistributorsLabel'), link: DISTRIBUTORS },
        ]}
      />
    </>
  );
}
