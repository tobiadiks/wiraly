import Head from 'next/head'
import Image from 'next/image'
import PrimaryButton from '../components/buttons/primary.button'
import SecondaryButton from '../components/buttons/secondary.button'
import FooterNavigation from '../components/navigations/footer.navigation'
import HeaderNavigation from '../components/navigations/header.navigations'
import { useRouter } from 'next/router'
import WalletCard from '../components/cards/wallet.card'
import TxnListCard from '../components/cards/txnlist.card'
export default function Home() {
    const router = useRouter()
    return (
        <div className='bg-white pb-24 min-h-screen'>
            <Head>
                <title>One Seller</title>
                <meta name="" content="" />
                <link rel="icon" href="" />
            </Head>
            {/* nav header */}
            <HeaderNavigation />

            <main className=' flex px-4 flex-col   w-full'>
                <section className='mt-20'>
                    {/* <div className=' text-3xl md:text-2xl'><span className='font-bold'>Wallet</span></div> */}
                </section>
                <section>
                    {/* wallet card */}
                    <WalletCard />
                </section>
                <section>
                    {/* transaction list */}
                    <TxnListCard/>
                    
                </section>

            </main>
            {/* footer nav */}
            <FooterNavigation />
        </div>
    )
}
