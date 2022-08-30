import '../assets/css/index.css'

function MyApp({ Component, pageProps }) {
  return (<div className='font-cabinet'><Component {...pageProps} /></div>)
}

export default MyApp
