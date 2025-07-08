import '../styles/MenuItem.css'

function MenuItem({ item, handleAddToCart }) {
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
        onClick={() => handleAddToCart(item.id)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default MenuItem
