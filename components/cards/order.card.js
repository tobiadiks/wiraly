import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";

export default function OrderCard(props) {
    const router=useRouter()
    return (
        <div  onClick={()=>router.push(`/order/${props.id}`)} className='grid md:grid-cols-5 grid-cols-4 cursor-pointer text-sm md:text-base rounded-lg ring-2 ring-black bg-white p-2 gap-x-2'>
            <div className='flex w-full col-span-2'>
                {/* <div className='h-12 w-12 bg-yellow-100 rounded-sm my-auto mr-2'></div> */}
                <div className='my-auto'>
                    <div className='font-bold'>
                        Iphone-XR
                    </div>
                    <div className='text-sm mt-2'>
                        <span className='font-bold'>OrderID:</span> #674456
                    </div>
                </div>

            </div>
            <div className='mx-auto my-auto font-bold '>NGN 1200</div>
            {/* <div className='mx-auto my-auto font-bold '>+2348112806410</div> */}
            {/* <div className='mx-auto my-auto font-bold '>36,Koiwo, Ile-ife, Osun</div> */}
            <div className='mx-auto my-auto font-bold hidden md:block'>13/6/2022</div>

            <select className=' mx-auto my-auto font-bold h-fit w-fit text-center outline-none'>
                <option className='text-gray-400' >New</option>
                <option className='text-yellow-400'>In Progress</option>
                <option className='text-green-400'>Delivered</option>
                <option className='text-red-400'>Canceled</option>
            </select>
        </div>
    )
}
