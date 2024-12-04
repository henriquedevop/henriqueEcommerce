import { BiCart } from "react-icons/bi"

export function Products() {
    return (
        <div>

            <main className="w-full px-8 mx-auto">

                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    <section className="w-full">
                        <img
                        className="w-full rounded-lg max-h-70 bg-2"
                        alt="imagem do produto"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725492498882"
                        />
                        <p className="font-medium mt-1 mb-2">Air pods pro</p>
                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">R$ 1000</strong>
                            <button className="bg-zinc-900 p-1 rounded">
                                <BiCart size={20} color="#fff"/>
                            </button>
                        </div>
                    </section>
                </div>

            </main>

        </div>
    )
}