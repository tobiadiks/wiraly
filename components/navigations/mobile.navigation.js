import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCartShopping, faChartSimple, faCog, faDashboard, faFileInvoice, faPeopleGroup, } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
export default function MobileNavigation(){
    const router=useRouter()
    useEffect(()=>{
        let route=router.pathname
        setCurrentRoute(route)
    },[router.pathname])
    
    const [currentRoute,setCurrentRoute]=useState('')
    return(
        <div className='w-fit p-4 bg-white min-h-screen h-screen static space-y-4 overflow-y-auto border block md:hidden'>
        <div onClick={()=> router.push('/dashboard')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('dashboard')? 'text-yellow-300':'text-black'} `}>
         <div className='h-4 w-4 '>
             <FontAwesomeIcon icon={faDashboard}/>
         </div>
        
        </div>

        {/* <div onClick={()=> router.push('/analytics')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('analytics')? 'text-yellow-300':'text-black'} `}>
         <div className='h-4 w-4 '>
             <FontAwesomeIcon icon={faChartSimple}/>
         </div>
         <div>Analytics</div>

        </div> */}

        <div onClick={()=> router.push('/product')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('product')? 'text-yellow-300':'text-black'} `}>
         <div className='h-4 w-4 '>
             <FontAwesomeIcon icon={faBox}/>
         </div>
       

        </div>

        {/* <div onClick={()=> router.push('/customer')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('customer')? 'text-yellow-300':'text-black'} `}>
         <div className='h-4 w-4 '>
             <FontAwesomeIcon icon={faPeopleGroup}/>
         </div>
         <div>Customer</div>

        </div> */}

        <div onClick={()=> router.push('/order')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('order')? 'text-yellow-300':'text-black'} `}>
         <div className='h-4 w-4 '>
             <FontAwesomeIcon icon={faCartShopping}/>
         </div>
      

        </div>

        {/* <div onClick={()=> router.push('/transaction')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('transaction')? 'text-yellow-300':'text-black'} `}>
         <div className='h-4 w-4 '>
             <FontAwesomeIcon icon={faFileInvoice}/>
         </div>
         <div>Transaction</div>

        </div> */}

        <div onClick={()=> router.push('/setting')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('setting')? 'text-yellow-300':'text-black'} `}>
         <div className='h-4 w-4 '>
             <FontAwesomeIcon icon={faCog}/>
         </div>
         

        </div>

     </div>
    )
}