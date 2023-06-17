import '../assets/css/index.css'
import "easymde/dist/easymde.min.css"
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import AuthGuard from '../components/hoc/authGuard'
import { registerPlugin } from 'react-filepond'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function MyApp({ Component, pageProps: {...pageProps } }) {
  return (

    <div className='font-cabinet'>
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </div>


  )
}

export default MyApp
