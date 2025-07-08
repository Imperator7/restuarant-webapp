import './App.css'
import Cart from './layout/Cart'
import Menu from './layout/Menu'
import useCart from './hooks/useCart'

function App() {
  const { cartOrders, handleAddToCart, handleRemoveFromCart } = useCart()

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
