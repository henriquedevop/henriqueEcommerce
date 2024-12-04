import { BiCart } from "react-icons/bi"
import { useEffect, useState, useContext } from "react"
import { api } from "../../services/api"
import { CartContext } from "../../contexts/cardContext";

export interface ProductsProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Products() {

    const { addItemCart } = useContext(CartContext)
    const [products, setProducts] = useState<ProductsProps[]>([])

    useEffect(() => {
        async function getData() {
            const response = await api.get("/products")
            setProducts(response.data)
        }

        getData()
    },[])

    function handleAddCartItem(item:ProductsProps) {
        addItemCart(item)
    }

    return (
        <div>

            <main className="w-full px-8 mx-auto">

                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {products.map((item) => (
                        <section key={item.id} className="w-full">
                            <img
                            className="w-full rounded-lg max-h-70 bg-2"
                            alt={item.title}
                            src={item.cover}
                            />
                            <p className="font-medium mt-1 mb-2">{item.title}</p>
                            <div className="flex gap-3 items-center">
                                <strong className="text-zinc-700/90">{item.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}</strong>
                                <button 
                                onClick={() => handleAddCartItem(item)}
                                className="bg-zinc-900 p-1 rounded">
                                    <BiCart size={20} color="#fff"/>
                                </button>
                            </div>
                        </section>
                    ))}
                </div>

            </main>

        </div>
    )
}