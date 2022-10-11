import { useSession, signIn, signOut } from "next-auth/react";
import UnauthNotificationPage from "../pages/unauth-notification.pages";

export default function AuthGuard({children}){
    const { data: session } = useSession()

  if (!session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        {/* {console.log(session.user.image)} */}
        {children}
      </>
    )
  }
  return (
    <>
      <UnauthNotificationPage/>
    </>
  )
}