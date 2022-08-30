import Head from 'next/head'
import Image from 'next/image'
import PrimaryButton from '../components/buttons/primary.button'
import SecondaryButton from '../components/buttons/secondary.button'
import FooterNavigation from '../components/navigations/footer.navigation'
import HeaderNavigation from '../components/navigations/header.navigations'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Wiraly</title>
        <meta name="" content="" />
        <link rel="icon" href="" />
      </Head>
      {/* nav header */}
      <HeaderNavigation />

      <main className='my-24 flex flex-col w-full'>
        <section className='px-4'>
          <div className=' text-3xl md:text-5xl text-center font-bold'>The <span className=' text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300'>magic app</span> that makes your truest <span className=' text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300'>wish</span> come true</div>
          <div className='w-fit mx-auto my-4 text-center'>Share your wish with your fans, family and friends.</div>
          <div className='mx-auto my-6 space-y-4 items-center  w-full md:w-1/2 lg:w-1/3 flex-col flex'>
            <div className='font-bold text-center w-fit mx-auto'>it&apos;s for free!</div>
            <PrimaryButton type='button' onClick={() => router.push('/auth/profile')} full ring rounded text='Continue with Google' />
            <SecondaryButton type='button' onClick={() => router.push('/auth/profile')} full ring rounded text='Continue with Facebook' />
            <div className='font-bold text-center w-fit text-sm mx-auto cursor-pointer'>By Continuing, you agree to our <span className='underline cursor-pointer'>Terms and Condition</span>,<span className='underline'>Privacy Policy</span></div>
          </div>

          
        </section>
        
      </main>
      {/* footer nav */}
      {/* <FooterNavigation /> */}
    </div>
  )
}
