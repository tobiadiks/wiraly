export default function RecommendedActionCard() {
    return (
        <div className='rounded-lg ring-2 snap-center flex-none w-11/12 ring-black bg-white'>
            <div className='border-b-2 border-b-black p-2'>Earn 200 points</div>
            <div className='p-2 flex'>
                <div className='h-6 w-6 bg-black my-auto'></div>
                <div className='my-auto ml-2'>
                    <div className='font-bold'>Take Some Selfie</div>
                    <div className='text-xs'>Approximately 1-3 mins</div>
                </div>
            </div>
        </div>
    )
}
