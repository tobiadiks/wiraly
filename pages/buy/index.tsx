'use client'


import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SimpleWhiteTheme from '../../components/themes/simple_white'
import SimpleYellowTheme from '../../components/themes/simple_yellow'
import dynamic from 'next/dynamic'
import axios from 'axios'
import useToken from '../../hooks/useToken'
// import { commands } from '@uiw/react-md-editor'
import CheckOut from '../../components/cards/checkout.card'
import useDataFetching from '../../hooks/useDataFetching'
import BlankLoader from '../../components/loaders/blank'
const SimpleMdeReact = dynamic(
    () => import("react-simplemde-editor").then(mod => mod.default),
    { ssr: false }
);




export default function Home() {
   


    const router = useRouter()
   


    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState(null)
    const [theme, setTheme] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
   
    const { loading: loadingGetApi, data, error } = useDataFetching('https://brainy-puce-pigeon.cyclic.app/api/products/search/' + router.query.product)
    useEffect(() => {
        if (!loadingGetApi && !error) {
            setProductName(data?.name)
            setProductDescription(data?.description)
            setProductPrice(data?.price)
            setTheme(data?.theme)
            setImage(data?.images[0])
        }
    }, [data, loadingGetApi, error])
    console.log(error)
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('price', productPrice.toString());
        formData.append('sold', Number(0).toString());
        formData.append('images', '');
        formData.append('theme', theme);

        let data: any = Object.fromEntries(formData.entries())
        data.images = []


        console.log(data)
        // const json = formToJSON(formData)
        // Send a POST request to the API route
        const response = await axios.post('http://localhost:3001/api/orders', data)


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
                    product_image={image}
                    onclick={() => setOpen(true)}
                />;
            case 'simpleyellow':
                return <SimpleYellowTheme
                    product_name={productName}
                    product_description={productDescription}
                    product_price={productPrice}
                    product_image={image}
                    onclick={() => setOpen(true)}
                />


            default:
                <SimpleWhiteTheme
                    product_name={productName}
                    product_description={productDescription}
                    product_price={productPrice}
                    product_image={image}
                    onclick={() => setOpen(true)}
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
                {/* <HeaderNavigation /> */}

                <main className='w-full'>
                    <section className='pt-0 max-h-screen w-full'>
                        {loadingGetApi && !error ?
                            <BlankLoader /> :


                            <div className=' w-full  bg-white min-h-screen h-screen  overflow-y-auto '>
                                {/* theme render */}
                                {open && <CheckOut />}
                                {currentTheme()}


                            </div>
                        }

                    </section>
                </main>

            </div>
        </>
    )
}
