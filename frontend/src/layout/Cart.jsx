import '../styles/Cart.css'

function Cart({ cartOrders, handleAddToCart, handleRemoveFromCart }) {
  return (
    <div className="Cart">
      Cart
      <hr style={{ marginBottom: '4px' }} />
      {cartOrders.map((order) => (
        <div key={order.id}>
          {order.name} - {order.amount}
          <button onClick={() => handleAddToCart(order.id)}>+</button>
          <button onClick={() => handleRemoveFromCart(order.id)}>-</button>
        </div>
      ))}
    </div>
  )
}

export default Cart
