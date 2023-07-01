import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
import { FilePond as IFilePond} from 'react-filepond'
import { makeDeleteRequest, makeUploadRequest } from '../../cloudinary/cloudinaryHelper'
import NotificationsSystem, {wyboTheme, useNotifications} from 'reapop'
// import { commands } from '@uiw/react-md-editor'

const SimpleMdeReact = dynamic(
    () => import("react-simplemde-editor").then(mod => mod.default),
    { ssr: false }
);




export default function Checkout() {
    const {notify,notifications,dismissNotification} = useNotifications()
    const router = useRouter()

    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productTotal, setProductTotal] = useState(0)
    const [theme, setTheme] = useState('')
    const [files, setFiles] = useState([])
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    

    
   
    

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('price', productPrice.toString());
        formData.append('total', productTotal.toString());
        
        formData.append('images', '');
        formData.append('theme', theme);
        

        let data = Object.fromEntries(formData.entries())
        data.images = [image]


        console.log(data)
        // const json = formToJSON(formData)
        // Send a POST request to the API route
        notify('Processing...','loading')
        const response = await axios.put('http://localhost:3001/api/products/'+router?.query?.id, data, {
            
        })
       

        if (response.status == 200) {
            // Form submitted successfully
            const data = await response.data;
            console.log(data);
            notify('Successful','success')
            setLoading(false)
            await router.push('/product')
        } else {
            // Form submission failed
            console.error('Form submission failed');
            notify('Failed','error')
            setLoading(false)
        }
        setLoading(false)
    };

    

     
    return (
        <>
            <div className='  fixed min-h-screen w-full'>
                <Head>
                    <title>Seltra: Buy</title>
                    <meta name="" content="" />
                    <link rel="icon" href="" />
                </Head>
                {/* nav header */}
                
                <NotificationsSystem
                // 2. Pass the notifications you want Reapop to display.
                notifications={notifications}
                // 3. Pass the function used to dismiss a notification.
                dismissNotification={(id) => dismissNotification(id)}
                // 4. Pass a builtIn theme or a custom theme.
                theme={wyboTheme}
            />
                <main className=' flex  flex-col   w-full p-4'>
                    <section className=' max-h-screen flex z-[9999]'>
                        {false ?
                         <BlankLoader />
                            
                       :
                       <> <div className='md:w-1/4 z-[9999] mx-auto my-auto block md:block w-full p-4 bg-white max-h-screen  static  overflow-y-auto border shadow-sm'>
                            <div className=' text-3xl md:text-2xl'>Place <span className='font-bold'>Order</span></div>
                            <div className=' text-xs md:text-sm'>Add your correct information.</div>
                            {/* form */}
                            <form onSubmit={handleSubmit} className='mt-8 space-y-8 h-full '>
                                <TextWithTop value={productName} onChange={(e) => setProductName(e.target.value)} ring full name='product_name' text='Product Name' />
                                {/* <TextAreaWithTop value={productDescription} onChange={(e) => setProductDescription(e.target.value)} ring full name='product_description' text='Product Description' /> */}
                                
                                <TextWithTop type={'number'} value={productPrice} onChange={(e) => setProductPrice(Number(e.target.value))} min={100} ring full name='product_price' text={`Price(${'NGN'})`} />
                                <TextWithTop type={'number'} value={productTotal} onChange={(e) => setProductTotal(Number(e.target.value))} min={1} ring full name='product_total' text={`Total inventory`} />
                                

                                <div className='grid grid-cols-2 gap-4 align-baseline'>
                                    <SecondaryButton disabled={loading} onclick={() => router.push('/product')} type={'button'} full text='Cancel' />
                                    <PrimaryButton disabled={loading} full text={loading ? 'Loading' : 'Publish'} />
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
