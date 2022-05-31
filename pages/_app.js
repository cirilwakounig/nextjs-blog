import '../styles/global.css'
// https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }