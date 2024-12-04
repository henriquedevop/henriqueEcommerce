import { BiCart } from "react-icons/bi"
import { useEffect, useState, useContext } from "react"
import { api } from "../../services/api"
import { CartContext } from "../../contexts/cardContext";
import toast from "react-hot-toast";
import { Link } from "react-router";

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
        toast.success("Produto adicionado")
    }

    return (
        <div>
    <main className="w-full px-8 mx-auto">
        <h1 className="font-bold text-2xl mb-6 mt-10 text-center">Produtos em alta</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {products.map((item) => (
                <section
                    key={item.id}
                    className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                >
                    <Link to={`/product/${item.id}`}>
                        <img
                            className="w-full h-48 object-cover bg-gray-200"
                            alt={item.title}
                            src={item.cover}
                        />
                        <p className="font-medium mt-2 px-4 text-lg truncate">{item.title}</p>
                    </Link>

                    <div className="flex justify-between items-center px-4 py-3">
                        <strong className="text-zinc-700 text-lg">
                            {item.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </strong>
                        <button
                            onClick={() => handleAddCartItem(item)}
                            className="bg-zinc-900 p-2 rounded-full hover:bg-zinc-700 transition"
                            title="Adicionar ao carrinho"
                        >
                            <BiCart size={20} color="#fff" />
                        </button>
                    </div>
                </section>
            ))}
        </div>
    </main>
</div>

    )
}