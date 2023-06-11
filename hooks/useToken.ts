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
            const userToken = JSON.parse(userString)
            const user= userToken?.user
            return user
        }
    }


    const [token, setToken] = useState(getToken())
    const [user, setUser] = useState(getUser())

    const saveToken = userToken => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("token", JSON.stringify(userToken))
            setUser(userToken?.user)
            setToken(userToken?.accessToken)
        }
    }


    return {
        setToken: saveToken,
        token,
        user
    }
}