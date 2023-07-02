'use client'


import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SimpleWhiteTheme from '../../components/themes/simple_white'
import SimpleYellowTheme from '../../components/themes/simple_yellow'
import dynamic from 'next/dynamic'
// import { commands } from '@uiw/react-md-editor'
import CheckOut from '../../components/cards/checkout.card'
import useDataFetching from '../../hooks/useDataFetching'
import BlankLoader from '../../components/loaders/blank'
import ErrorLoader from '../../components/loaders/error'


export default function Home() {

    const router = useRouter()



    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState(null)
    const [theme, setTheme] = useState('')
    const [image, setImage] = useState('')
    const [total, setTotal] = useState(null)
    const [sold, setSold] = useState(null)
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
            setTotal(data?.total[0])
            setSold(data?.sold[0])
        }
    }, [data, loadingGetApi, error])
    console.log(error)


    // Theme Handler
    const currentTheme = () => {
        switch (theme) {
            case 'simplewhite':
                return <SimpleWhiteTheme
                    product_name={productName}
                    product_description={productDescription}
                    product_price={productPrice}
                    product_image={image}
                    product_total={total}
                    product_sold={sold}
                    onclick={() => setOpen(true)}
                />;
            case 'simpleyellow':
                return <SimpleYellowTheme
                    product_name={productName}
                    product_description={productDescription}
                    product_price={productPrice}
                    product_image={image}
                    product_total={total}
                    product_sold={sold}
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
                            <BlankLoader /> : <>

                                {error ?
                                    <ErrorLoader /> :
                                    <div className=' w-full  bg-white min-h-screen h-screen  overflow-y-auto '>
                                        {/* theme render */}
                                        {open && <CheckOut price={data?.price} onclose={() => setOpen(false)} product_id={data?.id} />}
                                        {currentTheme()}


                                    </div>
                                }</>

                        }

                    </section>
                </main>

            </div>
        </>
    )
}
