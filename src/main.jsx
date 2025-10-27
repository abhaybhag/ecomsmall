import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Aboutus from './pages/Aboutus.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import MainContext from './compoents/MainContext.jsx'
import Layout from './pages/Layout.jsx'
import { Products } from './common/products.jsx'
import Productmyntra from './common/Productmyntra.jsx'
import Cart from './common/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <>

  <MainContext>

  <BrowserRouter>

    <Routes>
      <Route element={<Layout/>}>

      <Route path="/" element={<Home />}></Route>

      <Route path="/about-us" element={<Aboutus />}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/products" element={<Productmyntra/>}></Route>

      <Route path="/productDetails/:pid" element={<ProductDetails/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Route>



    </Routes>

  </BrowserRouter>

  </MainContext>
  </>

)
