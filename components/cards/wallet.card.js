

import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 export default function WalletCard(){
     return (
         <div className=" rounded-lg p-2 ring-2 bg-white ring-black">
             <div className='text-sm w-fit mx-auto'>Wallet Balance</div>
             <div className='text-lg font-bold my-2 w-fit mx-auto'>NGN 250,000.00</div>
             <div className='text-sm w-fit mx-auto flex'><span className=' underline'>Request payout</span><FontAwesomeIcon className='h-4 w-4 text-yellow-300 my-auto ml-2' icon={faCoins}/></div>
         </div>
     )
 }