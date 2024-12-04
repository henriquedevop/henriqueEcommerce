import { RouterProvider } from "react-router"
import { router } from "./routes/router"
import '@fontsource/inter/index.css'; 
import CartProvider from "./contexts/cardContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <CartProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router}/>
    </CartProvider>
    </>
  )
}

export default App
