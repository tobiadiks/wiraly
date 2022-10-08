import Head from 'next/head'
import PrimaryButton from '../../components/buttons/primary.button'
import TertiaryButton from '../../components/buttons/tertiary.button'

import FooterNavigation from '../../components/navigations/footer.navigation'
import HeaderNavigation from '../../components/navigations/header.navigations'
import TextWithTop from '../../components/textboxes/textwithtop.textbox'
import { useRouter } from 'next/router'
import {useState} from 'react'

export default function Profile() {
    const [gender,setGender]=useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        console.log(formData)
        router.push('/home')
    }
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>One Seller</title>
                <meta name="" content="" />
                <link rel="icon" href="" />
            </Head>
            {/* nav header */}
            {/* <HeaderNavigation /> */}
            {/* <div className='px-4 py-2 w-full'>
          <div className='p-4 rounded-full  h-4 w-4 bg-red-300'></div>
      </div> */}

            <main className='my-8  relative flex flex-col w-full'>

                <section className='px-4 mb-8'>
                    <div className='flex justify-between'>
                        <div className='bg-red-300 w-fit px-4 py-1 ring-2 ring-black rounded-full font-bold'>Earn +500 Points</div>
                        <div className='bg-white w-fit px-4 py-1 ring-2 ring-black rounded-full font-bold'>0/500</div>
                    </div>
                </section>

                <section className='px-4'>
                    <div className='p-4 bg-white rounded-lg ring-2 ring-black'>
                        <div>Hello there</div>
                        <div>Complete <span className='font-bold'>your profile</span></div>
                        <div className='text-sm my-4'>The information you give won&apos;t be shared with any third-party.</div>
                        <form onSubmit={handleSubmit} className='my-6 space-y-6 lg:space-y-0 lg:gap-4 lg:grid grid-cols-2'>
                            <TextWithTop name='first_name' ring full rounded text='Firstname' />
                            <TextWithTop name='last_name' ring full rounded text='Lastname' />
                            <TextWithTop name='address' ring full rounded text='Address' />
                            <TextWithTop name='zip_code' ring full rounded text='Zipcode' />
                            {/* gender */}
                            <div className='grid gap-x-2 lg:gap-x-4 grid-cols-3 col-span-2'>
                                <label htmlFor='gender' className='active:bg-blue-100 flex justify-center align-middle hover:bg-blue-100 ring-2 ring-black hover:ring-blue-300 h-24 rounded-lg '>
                                    <div className='my-auto mx-auto'>
                                        <div className='h-8 w-8 rounded-full mx-auto bg-yellow-300'></div>
                                        <div className='text-center text-sm font-bold mt-2'>Female</div>
                                    </div>
                                    <input className='hidden' name='gender' value='female'/>
                                </label>
                                <label className='active:bg-blue-100 flex justify-center align-middle hover:bg-blue-100 ring-2 ring-black hover:ring-blue-300 h-24 rounded-lg '>
                                    <div className='my-auto mx-auto'>
                                        <div className='h-8 w-8 rounded-full mx-auto bg-purple-300'></div>
                                        <div className='text-center text-sm font-bold mt-2'>Male</div>
                                    </div>
                                    <input className='hidden' name='gender' value='male'/>
                                </label>
                                <label className='active:bg-blue-100 flex justify-center align-middle hover:bg-blue-100 ring-2 ring-black hover:ring-blue-300 h-24 rounded-lg '>
                                    <div className='my-auto mx-auto'>
                                        <div className='h-8 w-8 rounded-full mx-auto bg-red-300'></div>
                                        <div className='text-center text-sm font-bold mt-2'>None</div>
                                    </div>
                                    <input className='hidden'  name='gender' value='none'/>
                                </label>
                            </div>
                            <TertiaryButton type='button' onClick={() => router.back()} text='Back' rounded full ring />
                            <PrimaryButton type='submit' text='Continue' rounded full ring />
                        </form>
                    </div>

                </section>
                {/* purple sprite */}
                <div className='w-full right-0 -z-50 fixed bottom-0 ring-2 ring-black h-32 bg-purple-300'>
                    {/* <div className=''>Already</div> */}
                </div>
            </main>
            {/* footer nav */}
            {/* <FooterNavigation/> */}
        </div>
    )
}
