import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Cart, Contact, Home, Shop, WishList } from './pages'
import { Layout } from './components'
import { MobileHandlerProvider } from './utils/mobileHandler'
import { Fragment } from 'react'
import ProductDetails from './pages/productDetails/ProductDetails'

function App() {

  const router = createBrowserRouter([

    {
      path:"",
      element: <Layout/>,
      children: [
        { index: true, element: <Home/> },
        { path:"/about", element: <About/> },
        { 
          path:"/shop",
          element: <Shop />
        },
        { 
          // :slug same unique id idea
          path:"/shop/:slug", 
          element: <ProductDetails />
        },
        { path:"/contact", element: <Contact /> },
        { path:"/wishlist", element: <WishList /> },
        { path:"/cart", element: <Cart /> },
      ]
    }
  ])

  return (
    <Fragment>
        <MobileHandlerProvider>
          <RouterProvider router={router} /> {/* this section as children  */}
        </MobileHandlerProvider>
    </Fragment>
  )
}

export default App
