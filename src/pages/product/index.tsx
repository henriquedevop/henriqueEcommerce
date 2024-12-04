import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router"
import { api } from "../../services/api"
import { CartContext } from "../../contexts/cardContext"
import toast from "react-hot-toast"
import { ProductsProps } from "../../components/products"

export function Product() {

    const { id } = useParams()
    const {addItemCart} = useContext(CartContext)
    const [product, setProduct] = useState<ProductsProps>()
    const navigate = useNavigate()

    useEffect(() => {
        async function getProduct() {
            const response = await api.get(`/products/${id}`) 
            setProduct(response.data)
        }
        getProduct()
    },[id])

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold text-gray-600">Loading...</p>
            </div>
        );
    }

    function handleAddItem() {
        if(!product) return
        toast.success("Indo para o carrinho")
        addItemCart(product)
        navigate("/cart")
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                    src={product.cover}
                    alt={product.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        {product.title}
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        {product.description}
                    </p>
                    <p className="text-xl font-semibold text-green-600 mb-4">
                            {product.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                    </p>

                    <button
                        className="w-full md:w-auto bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                        onClick={() => {
                            handleAddItem();
                        }}
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    )
}