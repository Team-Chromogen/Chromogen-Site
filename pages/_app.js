import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet');
      </style>
      <Component {...pageProps} />
    </div>
  );
}
