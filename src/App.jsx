import './App.css'
import { useState } from 'react'
import Cart from './layout/Cart'
import Menu from './layout/Menu'
import { menuItems } from './data/mockData'

function App() {
  const [cartOrders, setCartOrders] = useState([])

  const handleAddToCart = (itemId) => {
    setCartOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === itemId)
      if (existingOrder) {
        return prevOrders.map((order) =>
          order.id === itemId ? { ...order, amount: order.amount + 1 } : order
        )
      }
      return [
        ...prevOrders,
        {
          id: itemId,
          name: menuItems.find((item) => item.id === itemId).name,
          amount: 1,
        },
      ]
    })
  }

  const handleRemoveFromCart = (itemId) => {
    setCartOrders((prevOrders) =>
      prevOrders
        .map((order) =>
          order.id === itemId ? { ...order, amount: order.amount - 1 } : order
        )
        .filter((order) => order.amount > 0)
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
      <Menu handleAddToCart={handleAddToCart} />
      <Cart
        cartOrders={cartOrders}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  )
}

export default App
