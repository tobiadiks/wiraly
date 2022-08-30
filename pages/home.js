import Head from 'next/head'
import Image from 'next/image'
import PrimaryButton from '../components/buttons/primary.button'
import SecondaryButton from '../components/buttons/secondary.button'
import CollectionCard from '../components/cards/collection.card'
import ProductCard from '../components/cards/product.card'
import RecommendedActionCard from '../components/cards/recommended-action.card'
import FooterNavigation from '../components/navigations/footer.navigation'
import HeaderNavigation from '../components/navigations/header.navigations'


export default function Home() {
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
                <section className=' mt-24'>
                    <div className=' text-3xl md:text-2xl'>Welcome <span className='font-bold'>David</span></div>
                </section>
                <section>
                    <div className='flex my-6 justify-between font-bold'><div>Recommended</div><div className='pb-1 border-b-yellow-300 border-b-2'>See All</div></div>
                    <div className='w-full  md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 md:space-x-0 md:gap-y-4 lg:space-x-0 flex snap-x space-x-4 px-2  py-2 snap-mandatory overflow-x-scroll lg:overflow-x-hidden'>
                        {/* recommended action card */}
                        <RecommendedActionCard />
                        <RecommendedActionCard />
                        <RecommendedActionCard />
                        <RecommendedActionCard />
                    </div>

                    <div className='flex my-6 justify-between font-bold'><div>Collection</div><div className='pb-1 border-b-yellow-300 border-b-2'>See All</div></div>
                    <div className='w-full  md:grid lg:grid lg:grid-cols-6 md:grid-cols-4 md:space-x-0 md:gap-y-4 lg:space-x-0 flex snap-x space-x-4 px-2  py-2 snap-mandatory overflow-x-scroll lg:overflow-x-hidden'>
                        {/* collection card */}
                       
                    <CollectionCard type='Travel' price={145}/>
                    <CollectionCard type='Holiday' price={1000}/>
                    <CollectionCard type='Birthday' price={726}/>
                    <CollectionCard type='Wedding' price={1450}/>
                    </div>
                </section>

                <section>
                    <div className='flex my-6 justify-between font-bold'><div>My Wishlist</div><div className='pb-1 border-b-yellow-300 border-b-2'>See All</div></div>
                    <div className='w-full md:grid lg:grid lg:grid-cols-4 md:grid-cols-2 md:space-x-0 md:gap-y-4 lg:space-x-0 flex snap-x space-x-4 px-2  py-2 snap-mandatory overflow-x-scroll lg:overflow-x-hidden'>
                        {/* recommended action card */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
                </section>
            </main>
            {/* footer nav */}
            <FooterNavigation />
        </div>
    )
}
