import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductCard(props) {
    const router=useRouter()
    return (
        <div onClick={()=>router.push(`/product/${props.id}`)} className='rounded-lg ring-2 cursor-pointer snap-center flex-none w-full ring-black bg-white'>
            {/* eslint-disable-next-line @next/next/no-img-element  */}
            <div className='border-b-2 z-10 border-b-black p-2 relative h-full w-full'><img alt='' className="rounded-t-lg text-xs object-fit:cover" src={props.src} />
                <div className="z-20 absolute top-2 left-2 bg-white text-xs px-2 py-1 text-center"><sup className="font-bold">Sold</sup>{props.sold}/{props.total}</div>
            </div>
            <div className='p-2 flex justify-between'>
                {/* <div className='h-6 w-6 rounded-full bg-black my-auto'>

                </div> */}
                <div className='my-auto ml-2'>
                    <div className=''>{props.name?.length>=20?props.name?.substring(0,18)+'...':props.name}</div>
                    <div className='text-xs font-bold'>NGN {props.price}</div>
                </div>
 
            </div>
        </div>
    )
}
