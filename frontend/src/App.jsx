import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Collection from './pages/collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchBar from './components/searchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const App = () => {
  return (
    <div  className='px-4 sm:px-[5vm] md:px-[7vm] lg:px-[9vm]'>
      <ToastContainer/>
      <NavBar />
      <SearchBar/>
      <Routes>
        <Route  path='/'  element={<Home/>}/>
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
