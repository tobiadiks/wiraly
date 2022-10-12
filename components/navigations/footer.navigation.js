import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { faHome, faWallet, faUser, faCog } from "@fortawesome/free-solid-svg-icons"

export default function FooterNavigation() {
   
    return (
        <div className="py-4 px-4 bg-gray-900 flex h-24  w-full">
           <div className="mx-auto w-fit self-end text-gray-400">
            &#169; Salespadi Inc.
           </div>
        </div>
    )
}