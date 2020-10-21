import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="all">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Palanquin:wght@300&display=swap');
      </style>
      <Component {...pageProps} />
    </div>
  );
}
