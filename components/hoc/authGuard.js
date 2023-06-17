import { useRouter } from "next/router";
import UnauthNotificationPage from "../pages/unauth-notification.pages";
import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";

export default function AuthGuard({children}){
  const router = useRouter();
  const [authorized, setAuthorized]= useState(false);
  const {token}= useToken()
  
  useEffect(()=> {
    // on initial load - run auth check
    authCheck(router.asPath)

    // on route change state
    const hideContent=()=>setAuthorized(false)
    router.events.on('hashChangeStart', hideContent)

    // on route change complete
    router.events.on('routeChangeComplete',authCheck)

    // unsubscribe from event
    return ()=>{
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }

  },[])

  
 async function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/auth/login','/','/auth','/buy'];
    const path= url.split('?')[0]
    if(!token && !publicPaths.includes(path)){
      setAuthorized(false);
     await router.push('/auth');
    }
    else{
      setAuthorized(true);
    }
  }

  return (authorized && children)
}
