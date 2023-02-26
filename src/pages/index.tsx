import Head from 'next/head';
import { Container } from '@/components/ui/Container';

export default function Home() {
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
    </>
  );
}
