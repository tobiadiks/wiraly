import Image from "next/image";

export default function UploadImagesCard(props) {
    return (
        <div className=' flex-none relative w-full flex  justify-center align-middle  ring-1 ring-black  h-16 rounded-lg bg-gray-100 '>
                            {/* <div className='my-auto mx-auto'>
                                <div className={`h-8 w-8 rounded-full mx-auto ${'bg-yellow-300'}`}></div>
                                
                            </div> */}

<Image alt='product' className="rounded-lg" objectFit={'cover'} src={'/GIFT.png'} layout={'fill'}/>
                        </div>
    )
}
