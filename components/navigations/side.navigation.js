import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCartShopping, faChartSimple, faCog, faDashboard, faFileInvoice, faPeopleGroup, } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
export default function SideNavigation(){
    const router=useRouter()
    useEffect(()=>{
        let route=router.pathname
        setCurrentRoute(route)
    },[router.pathname])
    
    const [currentRoute,setCurrentRoute]=useState('')
    return(
        <div className='w-1/4 p-4 bg-white min-h-screen h-screen static space-y-4 overflow-y-auto border-r hidden lg:block'>
        <div onClick={()=> router.push('/dashboard')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('dashboard')? 'text-yellow-300':'text-black'} font-bold`}>
         <div className='h-4 w-4 mr-2'>
             <FontAwesomeIcon icon={faDashboard}/>
         </div>
         <div>Dashboard</div>
        </div>

        <div onClick={()=> router.push('/analytics')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('analytics')? 'text-yellow-300':'text-black'} font-bold`}>
         <div className='h-4 w-4 mr-2'>
             <FontAwesomeIcon icon={faChartSimple}/>
         </div>
         <div>Analytics</div>

        </div>

        <div onClick={()=> router.push('/product')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('product')? 'text-yellow-300':'text-black'} font-bold`}>
         <div className='h-4 w-4 mr-2'>
             <FontAwesomeIcon icon={faBox}/>
         </div>
         <div>Product</div>

        </div>

        <div onClick={()=> router.push('/customer')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('customer')? 'text-yellow-300':'text-black'} font-bold`}>
         <div className='h-4 w-4 mr-2'>
             <FontAwesomeIcon icon={faPeopleGroup}/>
         </div>
         <div>Customer</div>

        </div>

        <div onClick={()=> router.push('/order')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('order')? 'text-yellow-300':'text-black'} font-bold`}>
         <div className='h-4 w-4 mr-2'>
             <FontAwesomeIcon icon={faCartShopping}/>
         </div>
         <div>Order</div>

        </div>

        <div onClick={()=> router.push('/transaction')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('transaction')? 'text-yellow-300':'text-black'} font-bold`}>
         <div className='h-4 w-4 mr-2'>
             <FontAwesomeIcon icon={faFileInvoice}/>
         </div>
         <div>Transaction</div>

        </div>

        <div onClick={()=> router.push('/setting')} className={`flex cursor-pointer w-fit ${currentRoute.split('/').includes('setting')? 'text-yellow-300':'text-black'} font-bold`}>
         <div className='h-4 w-4 mr-2'>
             <FontAwesomeIcon icon={faCog}/>
         </div>
         <div>Setting</div>

        </div>

     </div>
    )
}