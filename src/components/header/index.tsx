import { useState } from "react"
import { BiCart } from "react-icons/bi"
import { HiBars3 } from "react-icons/hi2"
import { Link } from "react-router"

export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header 
        className="w-full h-14 flex justify-between items-center px-8 bg-black text-white">

            <div className="hidden sm:flex gap-5">
            <Link to="/" className="text-white">Henrique Ecommerce</Link>
            </div>

            <nav className="hidden sm:flex gap-10 mr-40">
            <Link to="/">Home</Link>
            <Link to="/cart">Carrinho</Link>
            <Link to="/cart">Produtos</Link>
            </nav>
            
            <div className={`sm:hidden ${isMenuOpen ? "flex" : "hidden"}
            w-1/2 h-1/2 bg-white/20 rounded-lg backdrop-blur-sm border border-white absolute top-20 left-0 mx-8
            `}>
                <nav className="flex flex-col gap-5 w-full p-8 p text-white">
                    <Link 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-black/40 rounded-md text-center shadow-md" to="/">Home</Link>
                    <Link
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-black/40 rounded-md text-center shadow-md" to="/cart">Carrinho</Link>
                </nav>
            </div>

            <div className="sm:hidden flex items-center">

                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                <HiBars3 size={22}/>
                </button>

                <Link to="/" className="text-black">Henrique Ecommerce</Link>

            </div>

            <Link  className="relative"  to="/cart">
                <BiCart size={22}/>
                <span
                className="absolute -right-3 -top-2 bg-blue-500 text-white px-2 w-5 h-5 flex items-center justify-center text-xs rounded-full"
                >2</span>
            </Link>
        </header>
    )
}