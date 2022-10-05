import dynamic from "next/dynamic";
import Image from "next/image"



const ReactMarkdown = dynamic(
    () => import("react-markdown"),
    { ssr: false }
);

export default function SimpleWhiteTheme(props) {
    return (
        <div className='w-full bg-gray-200 min-h-screen flex flex-col p-14 container '>
            <div className='mx-auto w-full '>
                <div className='text-5xl text-center font-bold mb-4'>{props.product_name}</div>
                
                <div className='px-4 py-2 cursor-pointer bg-black text-white mt-4 text-center ring-1 hover:ring-2 ring-black w-fit mx-auto font-bold'>{'NGN'} {props.product_price}</div>
                <div className=' p-2 my-8 relative h-96'><Image alt='product' className="rounded-t-lg" objectFit={'contain'} src={'/GIFT.png'} layout={'fill'} /></div>
                <div className='prose w-full max-w-none my-4'>
                   
                   <ReactMarkdown className="mx-auto">
                       {props.product_description}
                   </ReactMarkdown>
               </div>
                {/* <div className='grid'></div> */}
            </div>



        </div>
    )
}