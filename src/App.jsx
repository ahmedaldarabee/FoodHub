import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import { About, Cart, Contact, Home, Shop, WishList } from './pages'
import { Layout } from './components'

function App() {

  const router = createBrowserRouter([

    {
      path:"",
      element: <Layout/>,
      children: [
        { index: true, element: <Home/> },
        { path:"/about", element: <About/> },
        { path:"/shop", element: <Shop /> },
        { path:"/contact", element: <Contact /> },
        { path:"/wishlist", element: <WishList /> },
        { path:"/cart", element: <Cart /> },
      ]
    }

  ])

  return <RouterProvider router={router} />
}

export default App
