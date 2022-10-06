
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useSession, signOut,signIn } from 'next-auth/react'
import PrimaryButton from '../buttons/primary.button'
import TertiaryButton from '../buttons/tertiary.button'
import { useRouter } from 'next/router'
export default function HeaderNavigation() {
    const {data:session}= useSession()
    const router=useRouter()
    return (
        <nav className='w-full z-50 py-4 px-4 bg-white border-b flex fixed top-0 justify-between ' >
            <div onClick={()=>{session?router.push("/dashboard/"):router.push("/")}} className='text-yellow-300 cursor-pointer my-auto font-bold' > One Seller </div>
            {/* <div className='space-x-4' >
                <TertiaryButton text='Signup' />
                <PrimaryButton text='Login' />
            </div> */}
            {session?.user?.image?
            // eslint-disable-next-line @next/next/no-img-element
            <div className='flex'>
               <img  alt='' className='h-8 w-8 rounded-full mr-2' src={session?.user?.image}/>
            <div className='h-4 w-4 my-auto cursor-pointer' onClick={()=>signOut()}>
                <FontAwesomeIcon icon={faSignOut}/>
            </div> 
            </div>
            
            :
            <div className='flex h-8 w-8'>       
         <div className='h-4 w-4 my-auto cursor-pointer'  onClick={()=>signIn()}>
             <FontAwesomeIcon icon={faSignIn}/>
         </div> 
         </div>
            }

        </nav>
    )
}