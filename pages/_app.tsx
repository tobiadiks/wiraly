import '../assets/css/index.css'
import "easymde/dist/easymde.min.css"


function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (
    
      <div className='font-cabinet'>
    <Component {...pageProps} />
    </div>
   
  
    )
}

export default MyApp
