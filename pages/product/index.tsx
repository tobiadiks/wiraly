import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCartShopping, faChartSimple, faCog, faDashboard, faFileInvoice, faPeopleGroup, } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Image from 'next/image'
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
import SideNavigation from '../../components/navigations/side.navigation'
import { useRouter } from 'next/router'
import AuthGuard from '../../components/hoc/authGuard'
import productHandler from '../api/product'
import { useSession } from 'next-auth/react'


export default function  Home() {
    const router=useRouter()
    const {data:session}=useSession()

    const getUserProduct=async (data:{id:string})=>{
fetch("/api/product",{method:"GET",body:JSON.stringify(data)}).then((res)=>console.log(res))
    }
    
 
    return (
        <AuthGuard>
        <div className='bg-white  min-h-screen'>
            <Head>
                <title>One Seller</title>
                <meta name="" content="" />
                <link rel="icon" href="" />
            </Head>
            {/* nav header */}
            <HeaderNavigation />

            <main className=' flex  flex-col   w-full'>
                <section className='mt-14 max-h-screen flex'>
                    {/* SideNav*/}
                   <SideNavigation/>

                    {/* preview */}
                    <div className='w-3/4 p-4 bg-white min-h-screen h-screen  overflow-y-auto '>
                        {/* products */}

                        <section>
                    <div className='flex my-6 justify-between font-bold'><div className='text-2xl font-bold'>Product</div><div><PrimaryButton type={'button'} onclick={()=>router.push('/product/new')} full text='Add Product' /></div></div>
                    <div className='flex my-6 font-bold'><div className='font-bold'>Filter By</div>
                    <select className='ml-6'>
                        <option className='text-yellow-400'>All Product</option>
                        <option className='text-yellow-400'>Published</option>
                        <option className='text-yellow-400'>Archived</option>
                    </select>
                    </div>
                    <div className='w-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 gap-y-6'>
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

