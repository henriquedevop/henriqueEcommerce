export function Home() {
    return (
<div className="w-full h-screen sm:bg-hero-bg-desktop bg-hero-bg-mobile bg-cover bg-no-repeat bg-center">

{/* Conteúdo principal */}
<div className="w-full h-full flex flex-col sm:items-end sm:justify-center justify-start items-center sm:pr-20 sm:pl-10 px-4">
  <div className="sm:max-w-xl sm:flex flex-col items-start  w-full">
    <h1 className="text-5xl font-normal pt-28 text-center sm:text-left sm:pt-0 sm:font-semibold lg:text-7xl">
      Produtos eletrônicos com <span className="text-blue-600 font-medium">preço acessível.</span>
      <p className="font-light text-xl mt-3">
        Compre agora mesmo!
      </p>
    </h1>

    <div className="flex justify-center mt-5 sm:justify-end">
      <button className="bg-neutral-900 rounded-md text-white px-8 py-2 font-medium shadow-md md:text-xl">
        Compre aqui!
      </button>
    </div>
  </div>
</div>

</div>

    )
}