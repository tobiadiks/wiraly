
// import PrimaryButton from "../../components/buttons/primary.button"
// import Head from "next/head"
// import HeaderNavigation from "../../components/navigations/header.navigations"
// export default function SignIn() {

//     const { data: session } = {data:true};

//     return (
//         <>
//             <div>
//                 <Head>
//                     <title>Salespadi</title>
//                     <meta name="" content="" />
//                     <link rel="icon" href="" />
//                 </Head>
//                 {/* nav header */}
//                 <HeaderNavigation />

//                 <main className='my-24 flex flex-col w-full bg-yellow-50'>
//                     <section className='px-4'>
//                         <div className=' text-3xl md:text-5xl text-center font-bold'>Let&apos;s get you started</div>
//                         {session ?
//                             <div className='w-fit mx-auto my-4 text-center'>You have signed in already.</div>
//                             :
//                             <div className='w-fit mx-auto my-4 text-center'>Choose an account to sign in with.</div>
//                         }

//                         <div className='mx-auto my-6 space-y-4 items-center  w-full md:w-1/2 lg:w-1/3 flex-col flex'>
//                             {/*  <div className='font-bold text-center w-fit mx-auto'>it&apos;s for free!</div> */}
                            

//                             {/* <SecondaryButton type='button' onClick={() => router.push('/auth/profile')} full ring rounded text='Continue with Facebook' /> */}
//                             <div className='font-bold text-center w-fit text-sm mx-auto cursor-pointer'>By Continuing, you agree to our <span className='underline cursor-pointer'>Terms and Condition</span>,<span className='underline'>Privacy Policy</span></div>
//                         </div>


//                     </section>

//                 </main>
//                 {/* footer nav */}
//                 {/* <FooterNavigation /> */}
//             </div>

//         </>
//     )
// }

// // export async function getServerSideProps(context) {
// //     const providers = await getProviders()
// //     return {
// //         props: { providers },
// //     }
// // }