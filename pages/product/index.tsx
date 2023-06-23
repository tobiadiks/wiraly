import Head from 'next/head'
import PrimaryButton from '../../components/buttons/primary.button'
import ProductCard from '../../components/cards/product.card'
import HeaderNavigation from '../../components/navigations/header.navigations'
import SideNavigation from '../../components/navigations/side.navigation'
import { useRouter } from 'next/router'

import axios from 'axios'
import { useEffect } from 'react'
import useDataFetching from '../../hooks/useDataFetching'
import useToken from '../../hooks/useToken'
import BlankLoader from '../../components/loaders/blank'
import MobileNavigation from '../../components/navigations/mobile.navigation'

import DataTable from 'react-data-table-component';

export default function Home() {
    const router = useRouter()
    const { token } = useToken()
    const { loading, data, error } = useDataFetching('https://brainy-puce-pigeon.cyclic.app/api/products', {
        headers: { 'Authorization': 'Bearer ' + token }
    })
    console.log(data)
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Total',
            selector: row => row.total,
            sortable: true,
        },
        {
            name: 'Link',
            selector: row => row.short_url
        },
        {

            cell: row => <div className='cursor-pointer' onClick={()=>router.push(`/product/${row.id}`)}>Edit</div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {

            cell: () => <div className='text-red-500 cursor-pointer' onClick={null}>Delete</div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Products per page',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All',
    };

    return (
        <>
            <div className='bg-white  min-h-screen'>
                <Head>
                    <title>Seltra</title>
                    <meta name="" content="" />
                    <link rel="icon" href="" />
                </Head>
                {/* nav header */}
                <HeaderNavigation />

                <main className=' flex  flex-col   w-full'>
                    <section className='mt-14 max-h-screen flex'>
                        {/* SideNav*/}
                        <SideNavigation />
                        <MobileNavigation />

                        {/* preview */}

                        <div className='lg:w-3/4 w-full p-4 bg-white min-h-screen h-screen relative  overflow-y-auto '>
                            {/* products */}
                            {loading && !error ?
                                <BlankLoader /> :
                                <section>
                                    <div className='flex my-6 justify-between font-bold'><div className='text-2xl font-bold'>Product</div><div><PrimaryButton type={'button'} onclick={() => router.push('/product/new')} full text='Add Product' /></div></div>
                                    <div className='flex my-6 font-bold'><div className='font-bold'>Filter By</div>
                                        <select className='ml-6'>
                                            <option className='text-yellow-400'>All Product</option>
                                            <option className='text-yellow-400'>Published</option>
                                            <option className='text-yellow-400'>Archived</option>
                                        </select>
                                    </div>
                                    <div className='w-full  '>
                                        {/* product card */}
                                        <DataTable
                                            columns={columns}
                                            data={data || []}
                                            responsive
                                            striped
                                            pagination
                                            paginationComponentOptions={paginationComponentOptions}
                                        />

                                    </div>
                                </section>
                            }
                        </div>


                    </section>
                </main>

            </div>
        </>
    )
}

