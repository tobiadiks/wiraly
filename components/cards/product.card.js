import Image from "next/image";

export default function ProductCard() {
    return (
        <div className='rounded-lg ring-2 snap-center flex-none w-11/12 ring-black bg-white'>
            <div className='border-b-2 border-b-black p-2 relative h-32'><Image className="rounded-t-lg" objectFit={'cover'} src={'/GIFT.png'} layout={'fill'}/></div>
            <div className='p-2 flex'>
                <div className='h-6 w-6 rounded-full bg-black my-auto'></div>
                <div className='my-auto ml-2'>
                    <div className=''>Vivo Mobile Phone</div>
                    <div className='text-xs font-bold'>$230</div>
                </div>
            </div>
        </div>
    )
}
