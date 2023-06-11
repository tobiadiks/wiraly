
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'


import { useRouter } from 'next/router'
import useToken from '../../hooks/useToken'
import { faUser } from '@fortawesome/free-regular-svg-icons'
export default function HeaderNavigation() {

    const { token, user, setToken } = useToken()

    const signIn=()=>{
        router.push('/auth/login')
    }

    const signOut= async()=>{
        setToken('')
        await router.push('/')
    }

    const router = useRouter()
    return (
        <nav className='w-full z-50 py-4 px-4 bg-yellow-50 border-b border-b-gray-100 flex fixed top-0 justify-between ' >
            <div onClick={() => { token ? router.push("/dashboard") : router.push("/") }} className='text-yellow-300 cursor-pointer my-auto font-bold' > Seltra </div>
            
            {token ?
                
                <div className='flex'>
                    {user?.logo?
                    <img alt={''} className='h-8 w-8 rounded-full my-auto mr-2' src={user?.logo} />
                    :
                    <FontAwesomeIcon className='h-4 w-4 rounded-full my-auto mr-2' icon={faUser}/>
                    }
                    <div className='h-4 w-fit my-auto cursor-pointer' onClick={() => signOut()}>
                        Logout
                    </div>
                </div>
                :
                <div className='flex h-8 w-8'>
                    <div className='h-4 w-fit my-auto cursor-pointer' onClick={() => signIn()}>
                        Login
                    </div>
                </div>
            }

        </nav>
    )
}