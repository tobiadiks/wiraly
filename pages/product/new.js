import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PrimaryButton from '../../components/buttons/primary.button'
import SecondaryButton from '../../components/buttons/secondary.button'
import CollectionCard from '../../components/cards/collection.card'
import ProductCard from '../../components/cards/product.card'
import RecommendedActionCard from '../../components/cards/recommended-action.card'
import ThemeCard from '../../components/cards/theme.card'
import UploadImagesCard from '../../components/cards/uploadimages.card'
import FooterNavigation from '../../components/navigations/footer.navigation'
import HeaderNavigation from '../../components/navigations/header.navigations'
import TextAreaWithTop from '../../components/textboxes/textareawithtop.textbox'
import TextWithTop from '../../components/textboxes/textwithtop.textbox'
import SimpleWhiteTheme from '../../components/themes/simple_white'
import SimpleYellowTheme from '../../components/themes/simple_yellow'


export default function Home() {

    const router=useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        console.log(formData)
        // router.push('/home')
    }

    const [productName, setProductName] = useState('Your Product Name')
    const [productDescription, setProductDescription] = useState('Your Product Description')
    const [productPrice, setProductPrice] = useState(100)
    const [theme, setTheme] = useState('simplewhite')

    // Theme Handler
    const currentTheme = () => {
        switch (theme) {
            case 'simplewhite':
                return <SimpleWhiteTheme
                    product_name={productName}
                    product_description={productDescription}
                    product_price={productPrice}
                />;
            case 'simpleyellow':
                return <SimpleYellowTheme
                    product_name={productName}
                    product_description={productDescription}
                    product_price={productPrice}
                />


            default:
                <SimpleWhiteTheme
                    product_name={productName}
                    product_description={productDescription}
                    product_price={productPrice}

                />

        }

    }

    // End of theme Handler

    return (
        <div className='bg-white pb-24 min-h-screen'>
            <Head>
                <title>One Seller</title>
                <meta name="" content="" />
                <link rel="icon" href="" />
            </Head>
            {/* nav header */}
            <HeaderNavigation />

            <main className=' flex  flex-col   w-full'>
                <section className='mt-14 max-h-screen flex'>
                    {/* editor */}
                    <div className='w-1/4 p-4 bg-white min-h-screen h-screen static  overflow-y-auto border-r'>
                        <div className=' text-3xl md:text-2xl'>Add New <span className='font-bold'>Product</span></div>
                        <div className=' text-xs md:text-sm'>Add some information for the product you want to create</div>
                        {/* form */}
                        <form onSubmit={handleSubmit} className='mt-8 space-y-8 h-full '>
                            <TextWithTop value={productName} onchange={(e) => setProductName(e.target.value)} ring full name='product_name' text='Product Name' />
                            <TextAreaWithTop value={productDescription} onchange={(e) => setProductDescription(e.target.value)} ring full name='product_description' text='Product Description' />
                            <TextWithTop value={productPrice} onchange={(e) => setProductPrice(e.target.value)} type='number' min={0} ring full name='product_price' text={`Price(${'NGN'})`} />
                            {/* images */}
                            <div className='flex my-6 justify-between font-bold'><div>Upload Images</div><div className='pb-1 border-b-yellow-300 border-b-2'></div></div>
                            <div className='w-full grid grid-cols-4 gap-4'>
                                {/* collection card */}

                                <UploadImagesCard type='Travel' price={145} />
                                <UploadImagesCard type='Travel' price={145} />
                                <UploadImagesCard type='Travel' price={145} />
                                <UploadImagesCard type='Travel' price={145} />
                            </div>

                            {/* theme selection */}
                            <div className='flex my-6 justify-between font-bold'><div>Select Theme</div><div className='pb-1 border-b-yellow-300 border-b-2'></div></div>
                            <div className='w-full  flex snap-x space-x-4 px-2  py-2 snap-mandatory overflow-x-auto'>
                                {/* theme card */}
                                <ThemeCard
                                    id='simplewhite'
                                    name='Simple White'
                                    onclick={() => setTheme('simplewhite')}
                                />
                                <ThemeCard
                                    id='simpleyellow'
                                    name='Simple Yellow'
                                    onclick={() => setTheme('simpleyellow')}
                                />

                            </div>

                            <div className='grid grid-cols-2 gap-4 align-baseline'>
                                <SecondaryButton onclick={()=>router.push('/product')} type={'button'} full text='Cancel' />
                                <PrimaryButton full text='Publish' />
                            </div>



                        </form>

                    </div>

                    {/* preview */}
                    <div className='w-3/4 p-4 bg-white min-h-screen h-screen  overflow-y-auto '>
                        {/* theme render */}

                        {currentTheme()}


                    </div>

                </section>
            </main>

        </div>
    )
}
