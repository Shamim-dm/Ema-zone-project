import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainHome from './components/Layout/MainHome';
import Shop from './components/Shop/Shop';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Loging/Login';
import cartLoaderData from './cartLoaderData';




const router = createBrowserRouter([
    {
      path: '/',
      element: <MainHome/>,
      children: [
       {
        path: 'shop',
        element: <Shop></Shop>
       },
       {
        path: 'order',
        element: <Order></Order>,
        loader: cartLoaderData
       },
       {
        path: 'Inventory',
        element: <Inventory></Inventory>
       },
       {
        path: 'login',
        element: <Login></Login>
       },
      //  {
      //   path: '/',
      //   element: <App></App>

      //  }
      





      ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
