import './App.css'
import { useState } from 'react'
import Cart from './layout/Cart'
import Menu from './layout/Menu'

function App() {
  const [cartOrders, setCartOrders] = useState([])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
      <Menu setCartOrders={setCartOrders} />
      <Cart cartOrders={cartOrders} />
    </div>
  )
}

export default App
