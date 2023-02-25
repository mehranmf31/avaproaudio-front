import Document, {
  Html,
  Main,
  NextScript,
  Head,
  type DocumentContext,
} from 'next/document';

interface MyDocumentProps {
  locale?: string;
}

export default function MyDocument(props: MyDocumentProps) {
  const { locale = 'en' } = props;

  return (
    <Html dir={locale === 'fa' ? 'rtl' : 'ltr'} lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<MyDocumentProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, locale: ctx.locale };
};
