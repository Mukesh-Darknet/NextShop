import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'

import './App.css'
import Layout from './Component/Layout/Layout'
import Hero from './Component/Herosec/Hero'
import Product from './Component/Product/Product'
import Login from './Component/User/Login'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Hero/>}/>
      <Route path="/ourProduct" element={<Product/>}/>
      <Route Path="/Login" element={<Login/>}/>


    </Route>
  )
)


function App() {
  return (
    <>
     <RouterProvider router={router} />

    </>
  )
}

export default App
