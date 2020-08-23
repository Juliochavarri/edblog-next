const { default: Header } = require("../components/sections/Header");
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
