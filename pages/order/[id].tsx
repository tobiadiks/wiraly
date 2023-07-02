import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PrimaryButton from '../../components/buttons/primary.button'
import SecondaryButton from '../../components/buttons/secondary.button'
import HeaderNavigation from '../../components/navigations/header.navigations'
import TextWithTop from '../../components/textboxes/textwithtop.textbox'
import dynamic from 'next/dynamic'
import axios from 'axios'
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

    const { loading: loadingGetApi, data, error } = useDataFetching(`https://brainy-puce-pigeon.cyclic.app/api/orders/`+ router.query.id, {
        headers: { 'Authorization': 'Bearer' + token }
    })

    if (data && loadingGetApi) {
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
        const response = await axios.post('http://localhost:3001/api/products/' + router?.query?.id, data, {
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

                <main className=' flex  flex-col   w-full p-4 md:p-8'>
                    <section className='py-12 max-h-screen flex'>
                        {loadingGetApi ?
                            <BlankLoader />

                            :
                            <> <div className='lg:w-1/4 w-full  my-8 mx-auto  p-4 bg-white max-h-screen h-fit static  overflow-y-auto border rounded-sm'>
                                <div className=' text-3xl md:text-2xl'>Order <span className='font-bold'>1122AA</span></div>
                                <div className=' text-xs md:text-sm'>Add some information for the order you want to edit</div>
                                {/* form */}
                                <form onSubmit={handleSubmit} className='mt-8 space-y-8 h-full '>
                                    <TextWithTop value={productName} onChange={(e) => setProductName(e.target.value)} ring full name='product_name' text='Product Name' />

                                    <TextWithTop type={'number'} value={productPrice} onChange={(e) => setProductPrice(Number(e.target.value))} min={100} ring full name='product_price' text={`Price(${'NGN'})`} />
                                    <TextWithTop type={'number'} value={productTotal} onChange={(e) => setProductTotal(Number(e.target.value))} min={1} ring full name='product_total' text={`Total inventory`} />

                                    <div className='grid grid-cols-2 gap-4 align-baseline'>
                                        <SecondaryButton disabled={loading} onclick={() => router.back()} type={'button'} full text='Back' />
                                        <PrimaryButton disabled={loading} full text={loading ? 'Loading' : 'Share'} />
                                    </div>



                                </form>

                            </div>


                            </>
                        }
                    </section>
                </main>


            </div>
        </>
    )
}
