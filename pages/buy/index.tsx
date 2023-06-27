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
// import { commands } from '@uiw/react-md-editor'
import CheckOut from '../../components/cards/checkout.card'
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
        const response = await axios.post('http://localhost:3001/api/products', data, {
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
                {/* <HeaderNavigation /> */}

                <main className='w-full'>
                    <section className='pt-0 max-h-screen w-full'>
                        
                        {/* preview */}
                        <div className=' w-full  bg-white min-h-screen h-screen  overflow-y-auto '>
                            {/* theme render */}
<CheckOut/>
                            {currentTheme()}


                        </div>

                    </section>
                </main>

            </div>
        </>
    )
}
