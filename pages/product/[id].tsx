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




export default function Home() {
    const { token, user } = useToken()
    const {notify,notifications,dismissNotification} = useNotifications()

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


    

    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productTotal, setProductTotal] = useState(0)
    const [theme, setTheme] = useState('')
    const [files, setFiles] = useState([])
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const { loading: loadingGetApi, data, error } = useDataFetching('https://brainy-puce-pigeon.cyclic.app/api/products/' + router.query.id, {
        headers: { 'Authorization': 'Bearer ' + token }
    })

    useEffect(()=>{
        if(!loadingGetApi && !error){
            setProductName(data?.name)
            setProductDescription(data?.description)
            setProductPrice(data?.price)
            setProductTotal(data?.total)
            setTheme(data?.theme) 
            setImage(data?.images[0])
          }
    },[data, loadingGetApi, error])
   
    

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
        

        let data: any = Object.fromEntries(formData.entries())
        data.images = [image]


        console.log(data)
        // const json = formToJSON(formData)
        // Send a POST request to the API route
        const response = await axios.put('http://localhost:3001/api/products/'+router?.query?.id, data, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
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
                    product_image={image}
                />


            default:
                <SimpleWhiteTheme
                    product_name={productName}
                    product_description={productDescription}
                    product_price={productPrice}
                    product_image={image}
                />

        }

    }

    // End of theme Handler
    const revert = (token, successCallback, errorCallback) => {
        makeDeleteRequest({
          token,
          successCallback,
          errorCallback,
          responseCallback:resetResponse
        });
      };

      const process = async (
        fieldName,
          file,
          metadata,
          load,
          error,
          progress,
          abort,
          transfer,
          options
        ) => {
          const abortRequest = makeUploadRequest({
            file,
            fieldName,
            successCallback: load,
            errorCallback: error,
            progressCallback: progress,
            responseCallback:handleResponse
          });
          
          return {
            abort: () => {
              abortRequest.abort();
              abort();
            },
          };
        };

const handleResponse=(response)=>{
    setImage(response?.secure_url)
}

const resetResponse=()=>{
    setImage('')
}

      // Hackishly cast FilePond as any
    const FilePond: any = IFilePond
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
                <NotificationsSystem
                // 2. Pass the notifications you want Reapop to display.
                notifications={notifications}
                // 3. Pass the function used to dismiss a notification.
                dismissNotification={(id) => dismissNotification(id)}
                // 4. Pass a builtIn theme or a custom theme.
                theme={wyboTheme}
            />
                <main className=' flex  flex-col   w-full'>
                    <section className='pt-12 max-h-screen flex'>
                        {loadingGetApi ?
                         <BlankLoader />
                            
                       :
                       <> <div className='md:w-1/4 block md:block w-full p-4 bg-white min-h-screen h-screen static  overflow-y-auto border-r'>
                            <div className=' text-3xl md:text-2xl'>Edit <span className='font-bold'>Product</span></div>
                            <div className=' text-xs md:text-sm'>Add some information for the product you want to edit</div>
                            {/* form */}
                            <form onSubmit={handleSubmit} className='mt-8 space-y-8 h-full '>
                                <TextWithTop value={productName} onChange={(e) => setProductName(e.target.value)} ring full name='product_name' text='Product Name' />
                                {/* <TextAreaWithTop value={productDescription} onChange={(e) => setProductDescription(e.target.value)} ring full name='product_description' text='Product Description' /> */}
                                <SimpleMdeReact
                                    value={productDescription}
                                    onChange={(value) => setProductDescription(value)}

                                />
                                <TextWithTop type={'number'} value={productPrice} onChange={(e) => setProductPrice(Number(e.target.value))} min={100} ring full name='product_price' text={`Price(${'NGN'})`} />
                                <TextWithTop type={'number'} value={productTotal} onChange={(e) => setProductTotal(Number(e.target.value))} min={1} ring full name='product_total' text={`Total inventory`} />
                                {/* images */}
                                <div className='flex my-6 justify-between font-bold'><div>Upload Images</div><div className='pb-1 border-b-yellow-300 border-b-2'></div></div>

                                    {/* collection card */}

                                    <><FilePond
                                    files={files}
                                    acceptedFileTypes={["image/*"]}
                                    onupdatefiles={setFiles}
                                    allowMultiple={false}
                                    maxFiles={1}
                                    server={{process,revert}}
                                    name="file" /* sets the file input name, it's filepond by default */
                                    labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
                                /></>
                                

                                {/* theme selection */}
                                <div className='flex my-6 justify-between font-bold'><div>Select Theme</div><div className='pb-1 border-b-yellow-300 border-b-2'></div></div>
                                <div className='w-full  flex snap-x space-x-4 px-2  py-2 snap-mandatory overflow-x-auto'>
                                    {/* theme card */}
                                    <ThemeCard
                                        id='simplewhite'
                                        name='Simple White'
                                        onclick={() => setTheme('simplewhite')}
                                    />
                                    <ThemeCard
                                        id='simpleyellow'
                                        name='Simple Yellow'
                                        onclick={() => setTheme('simpleyellow')}
                                    />

                                </div>

                                <div className='grid grid-cols-2 gap-4 align-baseline'>
                                    <SecondaryButton disabled={loading} onclick={() => router.push('/product')} type={'button'} full text='Cancel' />
                                    <PrimaryButton disabled={loading} full text={loading ? 'Loading' : 'Publish'} />
                                </div>



                            </form>

                        </div>

                        {/* preview */}
                        <div className='md:w-3/4 w-0  bg-white min-h-screen h-screen  overflow-y-auto '>
                            {/* theme render */}

                            {currentTheme()}
                        </div>
                        </>
}
                    </section>
                </main>


            </div>
        </>
    )
}
