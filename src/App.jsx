import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import './App.css'
import Accomedation from "./pages/Accomedation"


function App() {

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/blog",
  element:<Blog />  },
  {
    path:"/accomedation",
    element:<Accomedation />
  }
])



  return (
  <>
  <RouterProvider  router={router}/>
  </>
  )
}

export default App
