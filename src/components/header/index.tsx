import { useState } from "react"
import { BiCart } from "react-icons/bi"
import { HiBars3 } from "react-icons/hi2"
import { Link } from "react-router"

export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-none w-full h-14 flex justify-between items-center px-8">

            <div className={`${isMenuOpen ? "flex" : "hidden"}
            w-1/2 h-1/2 bg-black/10 rounded-lg backdrop-blur-sm border border-white absolute top-10 left-0 mx-8
            `}>
                <nav className="flex flex-col gap-5 w-full p-8 p">
                    <Link 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-black/10 rounded-md text-center shadow-md" to="/">Home</Link>
                    <Link
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-black/10 rounded-md text-center shadow-md" to="/cart">Carrinho</Link>
                </nav>
            </div>

            <div className="flex items-center">

                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                <HiBars3 size={22}/>
                </button>

                <h3 className="text-black">Henrique Ecommerce</h3>

            </div>

            <Link to="/cart">
                <BiCart size={22}/>
            </Link>
        </header>
    )
}