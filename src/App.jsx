import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (peluche) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === peluche.id)
      if (exists) {
        return prev.map(item =>
          item.id === peluche.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...peluche, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) { removeFromCart(id); return }
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item))
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
