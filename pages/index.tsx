import Head from 'next/head'
import Image from 'next/image'
import PrimaryButton from '../components/buttons/primary.button'
import SecondaryButton from '../components/buttons/secondary.button'
import FooterNavigation from '../components/navigations/footer.navigation'
import HeaderNavigation from '../components/navigations/header.navigations'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>One Seller</title>
        <meta name="" content="" />
        <link rel="icon" href="" />
      </Head>
      {/* nav header */}
      <HeaderNavigation />

      <main className='py-24 pb-0 flex flex-col w-full bg-yellow-50'>
        <section className='px-4'>
          <div className=' text-3xl md:text-5xl text-center font-bold'>Automating your<span className=' text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300'> sales </span> process</div>
          <div className='w-fit mx-auto my-4 text-center'>Simply one-click and your sales are done for the week.</div>
          <div className='mx-auto my-6 space-y-4 items-center  w-full md:w-1/2 lg:w-1/3 flex-col flex'>
            <div className='font-bold text-center w-fit mx-auto'>it&apos;s for free!</div>
            <PrimaryButton type='button' onclick={() => signIn()} full ring rounded text='Get started' />
            {/* <SecondaryButton type='button' onClick={() => router.push('/auth/profile')} full ring rounded text='Continue with Facebook' /> */}
            <div className='font-bold text-center w-fit text-sm mx-auto cursor-pointer'>By Continuing, you agree to our <span className='underline cursor-pointer'>Terms and Condition</span>,<span className='underline'>Privacy Policy</span></div>
          </div>

          
        </section>
        <section className='px-4 lg:flex py-12 bg-gray-900 text-white'>
          <div className=' text-xl md:text-3xl lg:w-1/2 text-left font-bold'>One Seller platform brings together all the tools a business needs to sell and manage their inventory. </div>
          <div className='w-fit mx-auto my-4'>Video</div>     
        </section>
        <section className='px-4  py-8  pb-12 '>
        <div className='w-fit mx-auto font-bold text-gray-700'>Made just for you</div>     
          <div className=' text-lg md:text-2xl mt-2  text-left font-bold mx-auto w-fit'>Crafted themes</div>
          <div className='w-fit mx-auto my-4'>Samples</div>  
          <div className='w-fit lg:w-1/2 text-center mx-auto my-4'>Bring your idea. We have a simple user interface for easy setup, fast checkout process for your customers. Saving you time, energy and money!</div>        
          <div className='w-full md:w-1/2 lg:w-1/3  mx-auto'>
          <PrimaryButton type='button' onclick={() => signIn()} full  rounded ring  text='Turn your idea into a brand' />
          </div>
          
        </section>
        <section className='px-4  py-8  pb-12 bg-yellow-300 '>
        <div className='w-fit mx-auto font-bold text-gray-700'>Start selling</div>     
          <div className=' text-lg md:text-2xl mt-2  text-left font-bold mx-auto w-fit'>Sell anything everywhere</div>
          <div className='w-fit mx-auto my-4'>checkout</div>  
          <div className='w-fit lg:w-1/2 text-center mx-auto my-4'>With One Seller, it does&apos;nt matter if you have 1 product or 100k products - we&apos;ll keep it simple so you can focus on product development.</div>        
          <div className='w-full md:w-1/2 lg:w-1/3  mx-auto'>
          <PrimaryButton type='button' onclick={() => signIn()} full  rounded ring  text='Make sales today' />
          </div>
          
        </section>
        
      </main>
      {/* footer nav */}
      {/* <FooterNavigation /> */}
    </div>
  )
}
