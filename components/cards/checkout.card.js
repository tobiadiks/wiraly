
import { useRouter } from 'next/router'
import { useState } from 'react'
import PrimaryButton from '../../components/buttons/primary.button'
import SecondaryButton from '../../components/buttons/secondary.button'
import TextAreaWithTop from '../../components/textboxes/textareawithtop.textbox'
import TextWithTop from '../../components/textboxes/textwithtop.textbox'
import dynamic from 'next/dynamic'
import axios from 'axios'
import BlankLoader from '../../components/loaders/blank'
import NotificationsSystem, { wyboTheme, useNotifications } from 'reapop'
// import { commands } from '@uiw/react-md-editor'

// const SimpleMdeReact = dynamic(
//     () => import("react-simplemde-editor").then(mod => mod.default),
//     { ssr: false }
// );




export default function Checkout({ product_id, onclose }) {
    const { notify, notifications, dismissNotification } = useNotifications()
    const router = useRouter()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
const[orderId,setOrderId]=useState('')





    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('phones', phone);

        let data = Object.fromEntries(formData.entries())
        data.product = product_id;


        console.log(data)
        // const json = formToJSON(formData)
        // Send a POST request to the API route
        notify('Processing...', 'loading')
        const response = await axios.put('http://localhost:3001/api/orders', data)


        if (response.status == 200) {
            // Form submitted successfully
            const data = await response.data;
            console.log(data);
            setOrderId(data?.order_id)
            notify('Successful', 'success')
            setLoading(false)
            setSuccess(true)
        } else {
            // Form submission failed
            console.error('Form submission failed');
            notify('Failed', 'error')
            setLoading(false)
        }
        setLoading(false)
    };




    return (
        <>
            <div className='fixed min-h-screen w-full z-50'>

                <NotificationsSystem
                    // 2. Pass the notifications you want Reapop to display.
                    notifications={notifications}
                    // 3. Pass the function used to dismiss a notification.
                    dismissNotification={(id) => dismissNotification(id)}
                    // 4. Pass a builtIn theme or a custom theme.
                    theme={wyboTheme}
                />
                <main className=' flex  flex-col   w-full p-4'>
                    <section className=' max-h-screen flex '>
                        {success ?
                            
                            <div className='md:w-1/4 mx-auto my-auto block md:block w-full p-4 bg-white max-h-screen h-screen  static  overflow-y-auto border shadow-sm'>
                            <div className=' text-3xl md:text-2xl mx-auto my-auto'>Order <span className='font-bold'>{orderId}</span> was successful.</div>
                            </div>
                            :
                            <> <div className='md:w-1/4 mx-auto my-auto block md:block w-full p-4 bg-white max-h-screen h-screen  static  overflow-y-auto border shadow-sm'>
                                <div className=' text-3xl md:text-2xl'>Place <span className='font-bold'>Order</span></div>
                                <div className=' text-xs md:text-sm'>Add your correct information.</div>
                                {/* form */}
                                <form onSubmit={handleSubmit} className='mt-8 space-y-8 h-full '>
                                    <TextWithTop value={firstName} onChange={(e) => setFirstName(e.target.value)} ring full name='first_name' text='Firstname' />
                                    <TextAreaWithTop value={lastName} onChange={(e) => setLastName(e.target.value)} ring full name='last_name' text='Lastname' />
                                    <TextWithTop type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} ring full name='email' text={`Email`} />
                                    <TextWithTop type={'tel'} value={phone} onChange={(e) => setPhone(e.target.value)} ring full name='phone' text={`Phone`} />
                                    <TextWithTop value={address} onChange={(e) => setAddress(e.target.value)} min={100} ring full name='address' text={`Address`} />



                                    <div className='grid grid-cols-2 gap-4 align-baseline'>
                                        <SecondaryButton disabled={loading} onclick={onclose} type={'button'} full text='Cancel' />
                                        <PrimaryButton type={'submit'} disabled={loading} full text={loading ? 'Loading' : 'Submit'} />
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
