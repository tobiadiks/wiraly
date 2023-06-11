import { useState } from "react"

export default function useToken() {

    const getToken = () => {
        if (typeof window !== 'undefined') {
            const tokenString = localStorage?.getItem('token')
            const userToken = JSON.parse(tokenString)
            return userToken?.accessToken
        }
    }

    const getUser = () => {
        if (typeof window !== 'undefined') {
            const userString = localStorage?.getItem('token')
            const user = JSON.parse(userString)
            return user
        }
    }


    const [token, setToken] = useState(getToken())
    const [session, setSession] = useState(getUser())

    const saveToken = userToken => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("token", JSON.stringify(userToken))
            setSession(userToken)
            setToken(userToken?.accessToken)
        }
    }


    return {
        setToken: saveToken,
        token,
        session
    }
}