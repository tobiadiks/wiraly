
import { useState } from 'react'
import TxnCard from './txn.card'
import TxnOutCard from './txnout.card'

export default function TxnListCard(props) {
    const [isContribution,setIsContribution]=useState(true)
    return (
        <div>
        <div className='grid border-b grid-cols-2 mt-6'>
            <div onClick={()=>setIsContribution(true)} className={`border-b ${isContribution? 'border-b-yellow-300':''} cursor-pointer text-center`}>Sales</div>
            <div onClick={()=>setIsContribution(false)} className={`border-b ${!isContribution? 'border-b-yellow-300':''} cursor-pointer text-center`}>Withdrawals</div>
        </div>
        {isContribution&&
        <>
        <TxnCard/>
        <TxnCard/>
        <TxnCard/>
        <TxnCard/>
        <TxnCard/>
        </>
        }
        {!isContribution&&
        <>
        <TxnOutCard/>
        <TxnOutCard/>
        <TxnOutCard/>
        <TxnOutCard/>
        <TxnOutCard/>
        </>
        }
        </div>
    )
}
