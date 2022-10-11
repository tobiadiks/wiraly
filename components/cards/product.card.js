import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ProductCard() {
    return (
        <div className='rounded-lg ring-2 snap-center flex-none w-full ring-black bg-white'>
            <div className='border-b-2 z-10 border-b-black p-2 relative h-32'><Image alt='product' className="rounded-t-lg" objectFit={'contain'} src={'/GIFT.png'} layout={'fill'}/>
            <div className="z-20 absolute top-2 left-2 bg-white text-xs px-2 py-1 text-center"><sup className="font-bold">Sold</sup>12/20</div>
            </div>
            <div className='p-2 flex justify-between'>
                {/* <div className='h-6 w-6 rounded-full bg-black my-auto'>

                </div> */}
                <div className='my-auto ml-2'>
                    <div className=''>Vivo Mobile Phone</div>
                    <div className='text-xs font-bold'>NGN 230</div>
                </div>
                <div className="h-4 w-4 my-auto cursor-pointer "><FontAwesomeIcon icon={faListDots}/></div>
            </div>
        </div>
    )
}
