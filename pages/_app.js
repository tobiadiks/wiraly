import '../assets/css/index.css'
import "easymde/dist/easymde.min.css"
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <div className='font-cabinet'>
    <Component {...pageProps} />
    </div>
    </SessionProvider>
  
    )
}

export default MyApp
