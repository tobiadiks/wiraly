import { useState } from 'react'
import PrimaryButton from "../../components/buttons/primary.button"
import Head from "next/head"
import HeaderNavigation from "../../components/navigations/header.navigations"
import SecondaryButton from "../../components/buttons/secondary.button";
import TextWithTop from "../../components/textboxes/textwithtop.textbox";
import axios, { formToJSON } from 'axios';
import useToken from '../../hooks/useToken';
import { useRouter } from 'next/router';
import NotificationsSystem, {wyboTheme, useNotifications} from 'reapop'

export default function LogIn() {
    const {notify,notifications,dismissNotification} = useNotifications()

    const { data: user } = { data: false };
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const { token, setToken } = useToken()
    const router = useRouter()


    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        const formData = new FormData();
        formData.append('password', password);
        formData.append('email', email);
        const json = formToJSON(formData)
        try {
            // Send a POST request to the API route
            const response = await axios.post('https://brainy-puce-pigeon.cyclic.app/api/auth/login', json,)
            notify('Processing...','loading')

            if (response.status == 201) {
                // Form submitted successfully
                const data = await response.data;
                console.log(data);
                notify('Login Successful','success')
                setToken(data)
                // setLoading(false)
                await router.push('/dashboard')
            }

            else {
                // Form submission failed
                console.error('Form submission failed');
                notify('Form submission failed','error')
                setLoading(false)
            }

        } catch (error) {
            console.error('Something went wrong');
            notify('Something went wrong','error')
            setLoading(false)
        }
    }

    return (
        <>
            <div>
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
                <main className='my-24 flex flex-col w-full '>
                    <section className='px-4'>
                        <div className=' text-3xl md:text-5xl text-center font-bold'>Let&apos;s get you started</div>
                        {user ?
                            <div className='w-fit mx-auto my-4 text-center'>You have signed in already.</div>
                            :
                            <div className='w-fit mx-auto my-4 text-center'>Choose an account to sign in with.</div>
                        }

                        <form onSubmit={handleSubmit} className='mx-auto my-6 space-y-4 items-center  w-full md:w-1/2 lg:w-1/3 flex-col flex'>
                            {/*  <div className='font-bold text-center w-fit mx-auto'>it&apos;s for free!</div> */}

                            <TextWithTop disabled={loading} required full ring rounded text={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <TextWithTop disabled={loading} required type={"password"} full ring rounded text={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                            <PrimaryButton disabled={loading || !email?.length || !password?.length} type='submit' full ring rounded text={loading ? 'Loading...' : 'Login'} />
                            <SecondaryButton onclick={()=>router.push('/auth/signup')} disabled={loading} type='button' full ring rounded text={'Signup'} />
                            <div className='font-bold text-center w-fit text-sm mx-auto cursor-pointer'>By Continuing, you agree to our <span className='underline cursor-pointer'>Terms and Condition</span>,<span className='underline'>Privacy Policy</span></div>
                        </form>


                    </section>

                </main>
                {/* footer nav */}
                {/* <FooterNavigation /> */}
            </div>

        </>
    )
}

// // export async function getServerSideProps(context) {
// //     const providers = await getProviders()
// //     return {
// //         props: { providers },
// //     }
// // }
