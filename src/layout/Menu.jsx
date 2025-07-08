import { menuItems } from '../data/mockData'
import MenuItem from '../components/menuItem'

function Menu({ setCartOrders }) {
  return (
    <div>
      <h1 style={{ marginLeft: '8px' }}>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} setCartOrders={setCartOrders} />
        ))}
      </ul>
    </div>
  )
}

export default Menu
