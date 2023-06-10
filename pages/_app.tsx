import '../assets/css/index.css'
import "easymde/dist/easymde.min.css"
import AuthGuard from '../components/hoc/authGuard'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (

    <div className='font-cabinet'>
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </div>


  )
}

export default MyApp
