import '../styles/MenuItem.css'

function MenuItem({ item, setCartOrders }) {
  const handleAddToCart = () => {
    setCartOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === item.id)
      if (existingOrder) {
        return prevOrders.map((order) =>
          order.id === item.id ? { ...order, amount: order.amount + 1 } : order
        )
      }
      return [...prevOrders, { id: item.id, name: item.name, amount: 1 }]
    })
  }

  return (
    <div
      key={item.id}
      className="menu-item"
      style={{ backgroundImage: `url(${item.picture})`, position: 'relative' }}
    >
      {item.name} - ${item.price.toFixed(2)}
      <button
        className="add-to-cart"
        style={{
          position: 'absolute',
          right: '8px',
          fontSize: '12px',
          padding: '4px',
          transform: 'translateY(-10%)',
        }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default MenuItem
