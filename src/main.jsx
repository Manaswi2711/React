import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Products from './features/products/Products.jsx'
import Imdb from './features/imdb/Imdb.jsx'
import ShowDetails from './features/imdb/ShowDetails.jsx'
import Home from './features/Home.jsx'


const router=createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/home",
                element:<Home></Home>
            },
             {
                path:"/products",
                element:<Products></Products>
            },
           {
            path:"/imdb",
            element:<Imdb></Imdb>
           },
           {
            path:"/showdetails/:id",
            element:<ShowDetails></ShowDetails>
           }
        
        ]
    }
])

createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
 
)
