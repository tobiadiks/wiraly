import Head from 'next/head'
import Image from 'next/image'
// import SecondaryButton from '../buttons/secondary.button'
// import FooterNavigation from '../components/navigations/footer.navigation'
import HeaderNavigation from '../../components/navigations/header.navigations'
import { useRouter } from 'next/router'
import PrimaryButton from '../../components/buttons/primary.button'

export default function UnauthNotificationPage() {
  const router = useRouter()
  const signIn=()=>{
    router.push('/auth/login')
}
  return (
    <div>
      <Head>
        <title>Seltra</title>
        <meta name="" content="" />
        <link rel="icon" href="" />
      </Head>
      {/* nav header */}
      <HeaderNavigation />

      <main className='my-24 flex flex-col w-full '>
        <section className='px-4'>
          <div className=' text-3xl md:text-5xl text-center font-bold'>Oops! Something went wrong</div>
          <div className='w-fit mx-auto my-4 text-center'>You have not signed in your account.</div>
          <div className='mx-auto my-6 space-y-4 items-center  w-full md:w-1/2 lg:w-1/3 flex-col flex'>
            <div className='font-bold text-center w-fit mx-auto'>it&apos;s for free!</div>
            <PrimaryButton type='button' onclick={() => signIn()} full ring rounded text='Login' />
            {/* <SecondaryButton type='button' onClick={() => router.push('/auth/profile')} full ring rounded text='Continue with Facebook' /> */}
            <div className='font-bold text-center w-fit text-sm mx-auto cursor-pointer'>By Continuing, you agree to our <span className='underline cursor-pointer'>Terms and Condition</span>,<span className='underline'>Privacy Policy</span></div>
          </div>

          
        </section>
        
      </main>
      {/* footer nav */}
      {/* <FooterNavigation /> */}
    </div>
  )
}
