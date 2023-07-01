
import { useRouter } from 'next/router'
import { useState } from 'react'
import PrimaryButton from '../../components/buttons/primary.button'
import SecondaryButton from '../../components/buttons/secondary.button'
import TextWithTop from '../../components/textboxes/textwithtop.textbox'
import axios from 'axios'
import NotificationsSystem, { wyboTheme, useNotifications } from 'reapop'




export default function Checkout({ product_id,price, onclose }) {
    const { notify, notifications, dismissNotification } = useNotifications()
    const router = useRouter()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [orderId, setOrderId] = useState('')





    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('phones', phone);
        formData.append('quantity', quantity)

        let data = Object.fromEntries(formData.entries())
        data.product = product_id;


        console.log(data)
        // const json = formToJSON(formData)
        // Send a POST request to the API route
        notify('Processing...', 'loading')
        const response = await axios.post('https://brainy-puce-pigeon.cyclic.app/api/orders', data)


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
                    <section className=' flex '>
                        {success ?

                            <div className='md:w-1/4 mx-auto my-auto block md:block w-full p-4 bg-white max-h-screen h-screen  static  overflow-y-auto border shadow-sm'>
                                <div className=' text-3xl md:text-2xl mx-auto my-auto'>Order <span className='font-bold'>{orderId}</span> was successful.</div>
                            </div>
                            :
                            <> <div className='md:w-1/4 mx-auto my-auto block md:block w-full p-4 bg-white max-h-screen h-screen  static  overflow-y-auto border shadow-sm'>
                                <div className='w-full flex justify-between'><div className=' text-3xl md:text-2xl'>Place <span className='font-bold'>Order</span></div><div className=' text-lg md:text-base my-auto'>NGN <span className='font-bold'>{quantity * price}</span></div></div>
                                <div className=' text-xs md:text-sm'>Add your correct information.</div>
                                {/* form */}
                                <form onSubmit={handleSubmit} className='mt-8 space-y-8 h-full '>
                                    <TextWithTop required type={'number'} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} ring full name='quantity' text={`Quantity`} />
                                    <TextWithTop required value={firstName} onChange={(e) => setFirstName(e.target.value)} ring full name='first_name' text='Firstname' />
                                    <TextWithTop required value={lastName} onChange={(e) => setLastName(e.target.value)} ring full name='last_name' text='Lastname' />
                                    <TextWithTop required type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} ring full name='email' text={`Email`} />
                                    <TextWithTop required type={'tel'} value={phone} onChange={(e) => setPhone(e.target.value)} ring full name='phone' text={`Phone`} />
                                    <TextWithTop required value={address} onChange={(e) => setAddress(e.target.value)} min={100} ring full name='address' text={`Address`} />



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
