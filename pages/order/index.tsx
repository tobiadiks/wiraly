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
import NotificationsSystem, {wyboTheme, useNotifications} from 'reapop'
export default function Home() {
    const router = useRouter()
    const { token } = useToken()
    const {notify,notifications,dismissNotification} = useNotifications()
    
    const { loading, data, error } = useDataFetching('https://brainy-puce-pigeon.cyclic.app/api/orders', {
        headers: { 'Authorization': 'Bearer ' + token }
    })
    console.log(data)
    const handleDelete = async (id) => {
        

        
        // const json = formToJSON(formData)
        // Send a DELETE request to the API route
        notify('Processing...','loading')
        const response = await axios.delete(`https://brainy-puce-pigeon.cyclic.app/api/orders/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        

        if (response.status >= 200 || response.status <= 300) {
            // Form submitted successfully
            const data = await response.data;
            console.log(data);
            notify('Deleted','success')
            await router.reload()
            
        } else {
            // Form submission failed
            console.error('Form submission failed');
            notify('Something went wrong','error')
            
        }
        
    };
    const columns = [
        {

            cell: row => <div className='cursor-pointer' onClick={() => router.push(`/order/${row.id}`)}>{row.order_id}</div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: 'Product name',
            selector: row => row.product.name,
            sortable: true,
        },
        
        {
            name: 'Link',
            selector: row => row.product.short_url,
            cell: row => (
                <a className=' visited:text-yellow-400 default:text-yellow-400' href={`https://seltra.vercel.app/buy?product=${row.product.short_url}`} target="_blank" rel="noopener noreferrer">
                    https://seltra.vercel.app/buy?product={row.product.short_url}
                </a>
            ),
        },
        // {

        //     cell: (row) => <div className='text-red-500 cursor-pointer' onClick={()=>handleDelete(row.id)}>Delete</div>,
        //     ignoreRowClick: true,
        //     allowOverflow: true,
        //     button: true,
        // },
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
                <NotificationsSystem
                // 2. Pass the notifications you want Reapop to display.
                notifications={notifications}
                // 3. Pass the function used to dismiss a notification.
                dismissNotification={(id) => dismissNotification(id)}
                // 4. Pass a builtIn theme or a custom theme.
                theme={wyboTheme}
            />
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
                                    <div className='flex my-6 justify-between font-bold'><div className='text-2xl font-bold'>Order</div><div></div></div>
                                    
                                    <div className='w-full  '>
                                        {/* order card */}
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

