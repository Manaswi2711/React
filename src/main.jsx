import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Products from './features/products/Products.jsx'
import Imdb from './features/imdb/Imdb.jsx'

const router=createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/products",
                element:<Products></Products>
            },
           {
            path:"/imdb",
            element:<Imdb></Imdb>
           }
        
        ]
    }
])

createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
    <RouterProvider router={Router}></RouterProvider>
  </Provider>
 
)
