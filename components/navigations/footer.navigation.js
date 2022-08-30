import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { faHome, faWallet, faUser, faCog } from "@fortawesome/free-solid-svg-icons"

export default function FooterNavigation() {
    useEffect(()=>{
        let route=router.pathname
        setCurrentRoute(route)
    },[])
    const router=useRouter()
    const [currentRoute,setCurrentRoute]=useState('')
    return (
        <div className="py-4 px-4 fixed bottom-0 h-24  w-full">
            <nav className=' bg-white  w-full py-2 mx-auto px-4 ring-2 ring-black rounded-full  grid gap-2 grid-cols-4' >
         
                <div onClick={()=>router.push('/home')} className={` ${currentRoute=='/home'?'bg-yellow-300 ring-2':''} ring-black text-center text-black font-bold  px-4 py-2 rounded-full flex justify-center align-middle `}><FontAwesomeIcon className="mx-auto my-auto" icon={faHome}/></div>
                <div onClick={()=>router.push('/wallet')} className={` ${currentRoute=='/wallet'?'bg-yellow-300 ring-2':''} ring-black text-center text-black font-bold  px-4 py-2 rounded-full flex justify-center align-middle`}><FontAwesomeIcon className="mx-auto my-auto" icon={faWallet}/></div>
                <div onClick={()=>router.push('/profile')} className={` ${currentRoute=='/profile'?'bg-yellow-300 ring-2':''} ring-black text-center text-black font-bold  px-4 py-2 rounded-full flex justify-center align-middle`}><FontAwesomeIcon className="mx-auto my-auto" icon={faUser}/></div>
                <div onClick={()=>router.push('/setting')} className={` ${currentRoute=='/setting'?'bg-yellow-300 ring-2':''} ring-black text-center text-black font-bold  px-4 py-2 rounded-full flex justify-center align-middle`}><FontAwesomeIcon className="mx-auto my-auto" icon={faCog}/></div>
            </nav>
        </div>
    )
}