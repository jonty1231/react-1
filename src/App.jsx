import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import './App.css'
import Accomedation from "./pages/Accomedation"
import Destinations from "./pages/Destinations"


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
  },
  {
    path:"/destinations",
    element: <Destinations />
  }
])



  return (
  <>
  <RouterProvider  router={router}/>
  </>
  )
}

export default App
