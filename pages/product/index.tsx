import Head from 'next/head'
import PrimaryButton from '../../components/buttons/primary.button'
import ProductCard from '../../components/cards/product.card'
import HeaderNavigation from '../../components/navigations/header.navigations'
import SideNavigation from '../../components/navigations/side.navigation'
import { useRouter } from 'next/router'
import AuthGuard from '../../components/hoc/authGuard'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useEffect } from 'react'


export default function Home() {
    const router = useRouter()
    const { data } = useSession()

    const getUserProduct = async () => {
        axios.get("/api/product", { data: { id: data.user.email } }).then(i => console.log(i))
    }

    useEffect(() => {
        // getUserProduct()
    })

    return (
        <AuthGuard>
            <div className='bg-white  min-h-screen'>
                <Head>
                    <title>Salespadi</title>
                    <meta name="" content="" />
                    <link rel="icon" href="" />
                </Head>
                {/* nav header */}
                <HeaderNavigation />

                <main className=' flex  flex-col   w-full'>
                    <section className='mt-14 max-h-screen flex'>
                        {/* SideNav*/}
                        <SideNavigation />

                        {/* preview */}
                        <div className='lg:w-3/4 w-full p-4 bg-white min-h-screen h-screen  overflow-y-auto '>
                            {/* products */}

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
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />

                                </div>
                            </section>

                        </div>

                    </section>
                </main>

            </div>
        </AuthGuard>
    )
}

