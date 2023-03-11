import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { DISTRIBUTORS, CATEGORY } from '@/constants/appRoutes';
import { WhereToBuyBanner } from '@/components/distributors';
import { Container } from '@/components/ui';
import { CategoryCard } from '@/components/products/CategoryCard';

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

      <Container className="my-24 md:my-32 xl:my-40">
        <CategoryCard
          title={t('passiveSpeakersTitle')}
          description={t('passiveSpeakersDescription')}
          image="/assets/passive-speakers.png"
          link={CATEGORY('passive')}
          className="mb-12"
          comingSoonLabel={t('comingSoon')}
        />
        <CategoryCard
          title={t('activeSpeakersTitle')}
          description={t('activeSpeakersDescription')}
          image="/assets/active-speakers.png"
          isActive={false}
          comingSoonLabel={t('comingSoon')}
        />
      </Container>

      <WhereToBuyBanner
        className="my-24 md:my-32 xl:my-40"
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
