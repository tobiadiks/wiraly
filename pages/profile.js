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
    <div className='bg-yellow-50 pb-24 min-h-screen'>
      <Head>
        <title>Wiraly</title>
        <meta name="" content="" />
        <link rel="icon" href="" />
      </Head>
      {/* nav header */}
      <HeaderNavigation />

      <main className=' flex px-4 flex-col   w-full'>
      <section className='mt-24'>
                    <div className=' text-3xl md:text-2xl'><span className='font-bold'>Profile</span></div>
                </section>
        
      </main>
      {/* footer nav */}
      <FooterNavigation />
    </div>
  )
}
