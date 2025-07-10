import { useState } from 'react'

function useCart() {
  const [cartOrders, setCartOrders] = useState([])

  const handleAddToCart = (newOrder) => {
    console.log('Adding to cart:', newOrder)
    setCartOrders((prevOrders) => {
      const existingOrder = prevOrders.find(
        (order) => order.id === newOrder._id
      )
      if (existingOrder) {
        return prevOrders.map((order) =>
          order.id === newOrder._id
            ? { ...order, amount: order.amount + 1 }
            : order
        )
      }
      return [
        ...prevOrders,
        {
          id: newOrder._id,
          name: newOrder.name,
          amount: 1,
        },
      ]
    })
  }

  const handleRemoveFromCart = (newOrder) => {
    setCartOrders((prevOrders) =>
      prevOrders
        .map((order) =>
          order.id === newOrder._id
            ? { ...order, amount: order.amount - 1 }
            : order
        )
        .filter((order) => order.amount > 0)
    )
  }

  return { cartOrders, handleAddToCart, handleRemoveFromCart }
}

export default useCart
