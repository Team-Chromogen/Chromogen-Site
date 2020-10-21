import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Open+Sans&family=Oxygen+Mono&family=PT+Mono&family=Palanquin&family=Roboto:wght@300;400&family=VT323&display=swap');
      </style>
      <Component {...pageProps} />
    </div>
  );
}
