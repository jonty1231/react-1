import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import './App.css'


function App() {

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/blog",
  element:<Blog />  }
])



  return (
  <>
  <RouterProvider  router={router}/>
  </>
  )
}

export default App
