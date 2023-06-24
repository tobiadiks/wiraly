import '../assets/css/index.css'
import "easymde/dist/easymde.min.css"
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import AuthGuard from '../components/hoc/authGuard'
import { registerPlugin } from 'react-filepond'
import {NotificationsProvider, setUpNotifications} from 'reapop'
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
setUpNotifications({
  defaultProps: {
      position: 'top-center',
      dismissible: true,
  } 
})
function MyApp({ Component, pageProps: {...pageProps } }) {
  return (

    <div className='font-cabinet'>
      <AuthGuard>
        <NotificationsProvider>
        <Component {...pageProps} />
        </NotificationsProvider>
      </AuthGuard>
    </div>


  )
}

export default MyApp
