import { useContext } from "react"

import { CartContext } from "../../contexts/cardContext"
import { Link } from "react-router"

export function Cart() {

    const {cart, totalResult, addItemCart, removeItemCart} = useContext(CartContext)

    return (
        <div className="w-full px-8 mx-auto">
            <h1 className="font-medium text-2xl text-center pt-4 my-4">Meu carrinho</h1>

            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                    <span className="font-medium">Ops seu carrinho esta vazio</span>
                    <Link className="bg-slate-600 my-3 rounded p-2 text-white font-medium" to="/">Procure algo legal na home</Link>
                </div>
            )}

            {cart.map((item) => (
                <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
                    <img
                    className="w-28"
                    alt={item.title}
                    src={item.cover}
                    />

                    <strong>Preço: {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}</strong>
                    <div className="flex items-center justify-center gap-3">
                        <button onClick={() => removeItemCart(item)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">-</button>
                        {item.amount}
                        <button onClick={() => addItemCart(item)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">+</button>
                    </div>

                    <strong className="float-right">
                        Subtotal: {item.total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                    </strong>
                </section>
            ))}
            {cart.length !== 0 && (
                 <p className="font-bold mt-4">Total: {totalResult}</p>
            )}
        </div>
    )
}