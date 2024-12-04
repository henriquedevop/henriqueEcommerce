import { createContext, ReactNode, useState } from "react";

import { ProductsProps } from "../components/products";

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: ProductsProps) => void
    removeItemCart: (itemRemove: CartProps) => void
    totalResult: string
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({children}: CartProviderProps) {

    const [cart, setCart] = useState<CartProps[]>([])
    const [totalResult, setTotalResult] = useState("")
    
    function addItemCart(newItem: ProductsProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1) {
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

            setCart(cartList)
            totalResultCart(cartList)
            return
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }

    function removeItemCart(itemRemove: CartProps) {
        const indexItem = cart.findIndex(item => item.id === itemRemove.id)

        if(cart[indexItem]?.amount > 1) {
            let cartList = cart
            
            cartList[indexItem].amount = cartList[indexItem].amount - 1
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price
            setCart(cartList)
            totalResultCart(cartList)
            return
        }

        const RemoveItem = cart.filter(item => item.id !== itemRemove.id)
        setCart(RemoveItem)
        totalResultCart(RemoveItem)

    }

    function totalResultCart(items: CartProps[]) {
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
        const formatResult = result.toLocaleString("pr-BR", {
            style: "currency",
            currency: "BRL"
        })
        setTotalResult(formatResult)
    }

    return (
        <CartContext.Provider 
        value={{
            cart, 
            cartAmount: cart.length,
            addItemCart,
            removeItemCart,
            totalResult,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider