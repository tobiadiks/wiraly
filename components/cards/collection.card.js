import Image from "next/image";

export default function CollectionCard(props) {
    return (
        <div className=' flex-none w-6/12 lg:w-11/12 flex justify-center align-middle  ring-2 ring-black  h-24 rounded-lg bg-white snap-center '>
                            <div className='my-auto mx-auto'>
                                <div className={`h-8 w-8 rounded-full mx-auto ${'bg-yellow-300'}`}></div>
                                <div className='text-center text-sm font-bold mt-2'>{props.type}</div>
                                <div className='text-center text-sm'>${props.price}</div>
                            </div>
                        </div>
    )
}
