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
import OrderCard from '../../components/cards/order.card'
import { useRouter } from 'next/router'
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

    const router= useRouter()
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
                <section className='mt-14 max-h-screen flex'>
                    {/* SideNav*/}
                    <SideNavigation />
                    <MobileNavigation />
                    {/* preview */}

                    <div className='lg:w-3/4 w-full p-4 bg-white min-h-screen h-screen relative  overflow-y-auto '>
                        {/* products */}

                        <section >
                            <div className='flex my-6 justify-between font-bold'><div className='text-2xl font-bold'>Order</div><div></div></div>
                            <div className='max-w-full overflow-x-auto px-2 py-2'>
                            <div className='flex my-6 font-bold'><div className='font-bold'>Filter By</div>
                                <select className='ml-6'>
                                    <option  className='text-yellow-400'>All Order</option>
                                    <option className='text-yellow-400'>New</option>
                                    <option className='text-yellow-400'>In Progress</option>
                                    <option className='text-yellow-400'>Delivered</option>
                                    <option className='text-yellow-400'>Canceled</option>
                                </select>

                                <select className='ml-6'>
                                    <option className='text-yellow-400'>Date</option>
                                    <option className='text-yellow-400'>Price</option>
                                   
                                </select>
                            </div>
                            <div className='grid md:grid-cols-5 grid-cols-4  p-2 gap-x-2'>
                                <div className='mx-auto my-auto font-bold col-span-2'>Product Name</div>
                                <div className='mx-auto my-auto font-bold '>Price</div>
                                {/* <div className='mx-auto my-auto font-bold '>Phone</div> */}
                                {/* <div className='mx-auto my-auto font-bold '>Destination</div> */}
                                <div className='mx-auto my-auto font-bold hidden md:block'>Date</div>
                                <div className='mx-auto my-auto font-bold '>Status</div>
                            </div>
                            <div className='w-full grid md:grid lg:grid lg:grid-cols-1 md:grid-cols-1 gap-y-6'>
                                {/* order card */}
                                <OrderCard id='09'/>
                                <OrderCard id='099'/>
                            </div>
                            </div>
                        </section>

                    </div>

                </section>
            </main>

        </div>
    )
}
