import dynamic from "next/dynamic";
import Image from "next/image"

const ReactMarkdown = dynamic(
    () => import("react-markdown"),
    { ssr: false }
);

export default function SimpleYellowTheme(props) {
    return (
        <div className='w-full bg-yellow-400 min-h-screen flex flex-col lg:p-14 p-8  '>
            <div className='mx-auto w-full '>
                <div className='md:text-5xl text-3xl text-center font-bold mb-8'>{props.product_name}</div>
                
                <div className='px-4 py-2 cursor-pointer bg-white mt-4 text-center ring-1 hover:ring-2 ring-black w-fit mx-auto font-bold'>{'NGN'} {props.product_price}</div>
                <div className=' p-2 my-8 relative h-96'><Image alt='product' className="rounded-t-lg" objectFit={'contain'} src={'/GIFT.png'} layout={'fill'}/></div>
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