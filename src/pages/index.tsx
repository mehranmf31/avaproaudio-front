import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AVA PRO AUDIO</title>
        <meta name="description" content="AVA PRO AUDIO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-9 mx-auto">
        <h1 className="text-3xl">AVA PRO AUDIO</h1>
        <p className="text-normal">Home Page!</p>
      </div>
    </>
  );
}
