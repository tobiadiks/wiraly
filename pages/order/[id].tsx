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
import dynamic from 'next/dynamic'
import AuthGuard from '../../components/hoc/authGuard'
import axios, { formToJSON } from 'axios'
import useToken from '../../hooks/useToken'
import useDataFetching from '../../hooks/useDataFetching'
import BlankLoader from '../../components/loaders/blank'
// import { commands } from '@uiw/react-md-editor'

const SimpleMdeReact = dynamic(
    () => import("react-simplemde-editor").then(mod => mod.default),
    { ssr: false }
);




export default function Home() {
    const { token, user } = useToken()


    const defaultName = `
Apple iPhone 13 PRO - 6GB RAM - 512GB - 5G - Graphite
`

    const defaultDescription = `


* Manufacturer - Apple
* Operating System - iOS 15
* Rear Camera - 12MP + 12MP + 12MP
* Front Camera - 12MP
* RAM - 6GB
* Internal Memory - 512GB

iPhone 13 Pro comes with the biggest Pro cameras system upgrade ever. The colourful, sharper and brighter 6.1-inch Super Retina XDR display with ProMotion for faster, more responsive feel. A15 Bionic chip, the world's fastest smartphone chip for lightning-fast performance. Durable design and a huge leap in battery life.
    `

    const router = useRouter()


    

    const [productName, setProductName] = useState(defaultName)
    const [productDescription, setProductDescription] = useState(defaultDescription)
    const [productPrice, setProductPrice] = useState(100)
    const [productTotal, setProductTotal] = useState(1)
    const [theme, setTheme] = useState('simplewhite')
    const [loading, setLoading] = useState(false)

    const { loading: loadingGetApi, data, error } = useDataFetching('http://localhost:3001/api/orders/' + router?.query?.id, {
        headers: { 'Authorization': 'Bearer' + token }
    })
   
    if(data && loadingGetApi){
      setProductName(data?.name)
      setProductDescription(data?.description)
      setProductPrice(data?.price)
      setProductTotal(data?.total)
      setTheme(data?.theme)  
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('price', productPrice.toString());
        formData.append('total', productTotal.toString());
        formData.append('sold', Number(0).toString());
        formData.append('images', '');
        formData.append('theme', theme);
        formData.append('user', user?.id);

        let data: any = Object.fromEntries(formData.entries())
        data.images = []


        console.log(data)
        // const json = formToJSON(formData)
        // Send a POST request to the API route
        const response = await axios.post('http://localhost:3001/api/products/'+router?.query?.id, data, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })


        if (response.status == 201) {
            // Form submitted successfully
            const data = await response.data;
            console.log(data);
            setLoading(false)
            await router.push('/product')
        } else {
            // Form submission failed
            console.error('Form submission failed');
            setLoading(false)
        }
        setLoading(false)
    };

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
        <>
            <div className='bg-white min-h-screen'>
                <Head>
                    <title>Seltra</title>
                    <meta name="" content="" />
                    <link rel="icon" href="" />
                </Head>
                {/* nav header */}
                <HeaderNavigation />

                <main className=' flex  flex-col   w-full'>
                    <section className='pt-12 max-h-screen flex'>
                        {loadingGetApi ?
                         <BlankLoader />
                            
                       :
                       <> <div className='lg:w-1/4 hidden md:block w-0 p-4 bg-white min-h-screen h-screen static  overflow-y-auto border-r'>
                            <div className=' text-3xl md:text-2xl'>Edit <span className='font-bold'>Product</span></div>
                            <div className=' text-xs md:text-sm'>Add some information for the product you want to edit</div>
                            {/* form */}
                            <form onSubmit={handleSubmit} className='mt-8 space-y-8 h-full '>
                                <TextWithTop value={productName} onChange={(e) => setProductName(e.target.value)} ring full name='product_name' text='Product Name' />
                                {/* <TextAreaWithTop value={productDescription} onChange={(e) => setProductDescription(e.target.value)} ring full name='product_description' text='Product Description' /> */}
                                <SimpleMdeReact
                                    value={productDescription}
                                    onChange={(value) => setProductDescription(value)}

                                />
                                <TextWithTop type={'number'} value={productPrice} onChange={(e) => setProductPrice(Number(e.target.value))} min={100} ring full name='product_price' text={`Price(${'NGN'})`} />
                                <TextWithTop type={'number'} value={productTotal} onChange={(e) => setProductTotal(Number(e.target.value))} min={1} ring full name='product_total' text={`Total inventory`} />
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
                                    <SecondaryButton disabled={loading} onclick={() => router.push('/product')} type={'button'} full text='Cancel' />
                                    <PrimaryButton disabled={loading} full text={loading ? 'Loading' : 'Publish'} />
                                </div>



                            </form>

                        </div>

                        {/* preview */}
                        <div className='lg:w-3/4 w-full  bg-white min-h-screen h-screen  overflow-y-auto '>
                            {/* theme render */}

                            {currentTheme()}
                        </div>
                        </>
}
                    </section>
                </main>


            </div>
        </>
    )
}