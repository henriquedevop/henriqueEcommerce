import { RouterProvider } from "react-router"
import { router } from "./routes/router"
import '@fontsource/inter/index.css'; 

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
