import "../styles/style.css";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet');
      </style>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>Chromogen</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
