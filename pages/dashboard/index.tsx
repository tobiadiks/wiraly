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
import MobileNavigation from '../../components/navigations/mobile.navigation'

export default function Home() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        console.log(formData)
        // router.push('/home')
    }

    const [productName, setProductName] = useState('Your Product Name')
    const [productDescription, setProductDescription] = useState('Your Product Name')
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
        <div className='bg-white pb-0 min-h-screen'>
            <Head>
                <title>Seltra</title>
                <meta name="" content="" />
                <link rel="icon" href="" />
            </Head>
            {/* nav header */}
            <HeaderNavigation />

            <main className=' flex  flex-col   w-full'>
                <section className='mt-14 max-h-screen flex w-full'>
                    {/* SideNav*/}
                    <SideNavigation />
                    <MobileNavigation />
                    {/* preview */}
                    <div className='md:w-4/5 w-full  p-4 bg-white min-h-screen h-screen  overflow-y-auto '>
                        
                        {/* products */}

                        <section>
                            <div className='flex my-6 justify-between font-bold'><div className='text-2xl font-bold'>Dashboard</div><div>
                                {/* <PrimaryButton type={'button'} onclick={()=>router.push('/product/new')} full text='Add Product' /> */}
                            </div></div>
                            <div className='grid md:grid-cols-3 grid-cols-1 my-6  font-bold gap-4'>
                                <div className='border-gray-200 border w-full h-full rounded-sm p-2'>
                                    <div className='text-sm text-gray-600'>Total Sales</div>
                                    <div className='text-2xl font-bold'>$200,000</div>
                                </div>
                                <div className='border-gray-200 border w-full h-full rounded-sm p-2'>
                                    <div className='text-sm text-gray-600'>Total Products</div>
                                    <div className='text-2xl font-bold'>62</div>
                                </div>
                                <div className='border-gray-200 border w-full h-full rounded-sm p-2'>
                                    <div className='text-sm text-gray-600'>Total Order</div>
                                    <div className='text-2xl font-bold'>12</div>
                                </div>
                                {/* <div className='border-gray-200 border w-full h-full rounded-sm p-2'>
                                    <div className='text-sm text-gray-600'>Total Sales</div>
                                    <div className='text-lg font-bold'>$200,000</div>
                                </div> */}
                            </div>
                            {/* chart */}
                            <div className='grid grid-cols-1 my-6 h-64 font-bold gap-4'>
                                <div className='border-gray-200 bg-gray-50 border flex w-full h-full rounded-sm'>
                                    <div className='text-gray-200 text-lg w-fit h-fit mx-auto my-auto'>Coming soon</div>
                                </div>

                            </div>


                        </section>

                    </div>


                </section>
            </main>

        </div>
    )
}
