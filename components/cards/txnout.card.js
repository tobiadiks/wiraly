
export default function TxnOutCard(props) {
    return (
        <div className='py-2 flex justify-between'>
            <div className='flex'>
                <div className='h-4 w-4 my-auto rounded-full bg-yellow-100'></div>
                <div className='ml-2'>
                    <div className='font-bold text-sm'>Successful</div>
                    <div className=' text-sm'>for Vivo Phone</div>
                </div>
            </div>

            <div className=''>
                <div className='font-bold text-sm'>$5,000</div>
                <div className='text-sm'>Sep 30</div>
            </div>
        </div>
    )
}
