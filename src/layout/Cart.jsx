import '../styles/Cart.css'

function Cart({ cartOrders }) {
  return (
    <div className="Cart">
      Cart
      <hr style={{ marginBottom: '4px' }} />
      {cartOrders.map((order) => (
        <div key={order.id}>
          {order.name} - {order.amount}
        </div>
      ))}
    </div>
  )
}

export default Cart
