import '../styles/Cart.css'

function Cart({ cartOrders, handleAddToCart, handleRemoveFromCart }) {
  return (
    <div className="cart">
      Cart
      <hr style={{ marginBottom: '4px' }} />
      {cartOrders.map((order) => (
        <div key={order.id} className="cart-item">
          <div>
            {order.name} - {order.amount}
          </div>
          <div>
            <button
              className="cart-button"
              onClick={() => handleAddToCart(order)}
            >
              +
            </button>
            <button
              className="cart-button"
              onClick={() => handleRemoveFromCart(order)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart
