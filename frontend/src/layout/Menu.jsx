import MenuItem from '../components/menuItem'
import { useMenu } from '../hooks/useMenu'

function Menu({ handleAddToCart }) {
  const { menuItems } = useMenu()

  return (
    <div>
      <h1 style={{ marginLeft: '8px' }}>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            handleAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Menu
