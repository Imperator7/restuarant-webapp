import { useState } from 'react'
import { menuItems } from '../data/mockData'

function useCart() {
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

  return { cartOrders, handleAddToCart, handleRemoveFromCart }
}

export default useCart
