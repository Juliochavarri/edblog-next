const { default: Header } = require("../components/sections/Header");
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
