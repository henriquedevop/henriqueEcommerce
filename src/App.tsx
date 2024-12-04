import { RouterProvider } from "react-router"
import { router } from "./routes/router"
import '@fontsource/inter/index.css'; 
import CartProvider from "./contexts/cardContext";

function App() {
  return (
    <>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
    </>
  )
}

export default App
