import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/common';
import { Vazirmatn } from '@next/font/google';
const vazir = Vazirmatn({ subsets: ['arabic', 'latin'] });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --vazir-font: ${vazir.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
