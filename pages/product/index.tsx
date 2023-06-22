import Head from 'next/head'
import PrimaryButton from '../../components/buttons/primary.button'
import ProductCard from '../../components/cards/product.card'
import HeaderNavigation from '../../components/navigations/header.navigations'
import SideNavigation from '../../components/navigations/side.navigation'
import { useRouter } from 'next/router'

import axios from 'axios'
import { useEffect } from 'react'
import useDataFetching from '../../hooks/useDataFetching'
import useToken from '../../hooks/useToken'
import BlankLoader from '../../components/loaders/blank'
import MobileNavigation from '../../components/navigations/mobile.navigation'


export default function Home() {
    const router = useRouter()
    const { token } = useToken()
    const { loading, data, error } = useDataFetching('https://brainy-puce-pigeon.cyclic.app/api/products', {
        headers: { 'Authorization': 'Bearer ' + token }
    })
    console.log(data)

    return (
        <>
            <div className='bg-white  min-h-screen'>
                <Head>
                    <title>Seltra</title>
                    <meta name="" content="" />
                    <link rel="icon" href="" />
                </Head>
                {/* nav header */}
                <HeaderNavigation />

                <main className=' flex  flex-col   w-full'>
                    <section className='mt-14 max-h-screen flex'>
                        {/* SideNav*/}
                        <SideNavigation />
                        <MobileNavigation />

                        {/* preview */}
                        
                            <div className='lg:w-3/4 w-full p-4 bg-white min-h-screen h-screen relative  overflow-y-auto '>
                                {/* products */}
                                {loading && !error ?
                            <BlankLoader /> :
                                <section>
                                    <div className='flex my-6 justify-between font-bold'><div className='text-2xl font-bold'>Product</div><div><PrimaryButton type={'button'} onclick={() => router.push('/product/new')} full text='Add Product' /></div></div>
                                    <div className='flex my-6 font-bold'><div className='font-bold'>Filter By</div>
                                        <select className='ml-6'>
                                            <option className='text-yellow-400'>All Product</option>
                                            <option className='text-yellow-400'>Published</option>
                                            <option className='text-yellow-400'>Archived</option>
                                        </select>
                                    </div>
                                    <div className='w-full grid md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
                                        {/* product card */}
                                        {/* <ProductCard name={"Samsung S10"} id={'0l'} price={50000} total={40} sold={32} src={''} /> */}
                                        {
                                        data?.map((value)=><ProductCard key={value?.id} id={value?.id} name={value?.name} price={value?.price} total={value?.total} sold={1} src={value?.images[0]} />)
                                        }
                                    </div>
                                </section>
}
                            </div>
                        

                    </section>
                </main>

            </div>
        </>
    )
}

