import { RiDiscountPercentLine } from "react-icons/ri"
import { BiX } from "react-icons/bi"
import { useState } from "react"

export function Notification() {

    const [isNotificationOpen, setISNotificationOpen] = useState(true)

    return (
        <div className={`w-full h-7 bg-black flex items-center justify-center ${isNotificationOpen ? "" : "hidden"}`}>
            <span className="text-white flex items-center font-bold text-sm"><RiDiscountPercentLine className="mr-1" size={18}/>
            30% em toda loja-<span className="text-zinc-300">Tempo limitado</span>
            <button
            onClick={ () => setISNotificationOpen(false) }
            >
                <BiX className="ml-5" size={18}/>
            </button>
            </span>
        </div>
    )
}