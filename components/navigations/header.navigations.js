
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'


import { useRouter } from 'next/router'
import useToken from '../../hooks/useToken'
export default function HeaderNavigation() {

    const { token, session, setToken } = useToken()

    const signIn=()=>{
        router.push('/auth/login')
    }

    const signOut=()=>{
        setToken('')
    }

    const router = useRouter()
    return (
        <nav className='w-full z-50 py-4 px-4 bg-yellow-50 border-b border-b-gray-100 flex fixed top-0 justify-between ' >
            <div onClick={() => { token ? router.push("/dashboard/") : router.push("/") }} className='text-yellow-300 cursor-pointer my-auto font-bold' > Salespadi </div>
            {/* <div className='space-x-4' >
                <TertiaryButton text='Signup' />
                <PrimaryButton text='Login' />
            </div> */}
            {token ?
                // eslint-disable-next-line @next/next/no-img-element
                <div className='flex'>
                    <img alt='' className='h-8 w-8 rounded-full mr-2' src={''} />
                    <div className='h-4 w-4 my-auto cursor-pointer' onClick={() => signOut()}>
                        <FontAwesomeIcon icon={faSignOut} />
                    </div>
                </div>

                :
                <div className='flex h-8 w-8'>
                    <div className='h-4 w-4 my-auto cursor-pointer' onClick={() => signIn()}>
                        <FontAwesomeIcon icon={faSignIn} />
                    </div>
                </div>
            }

        </nav>
    )
}