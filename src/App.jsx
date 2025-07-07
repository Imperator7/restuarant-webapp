import './App.css'
import MenuItem from './components/menuItem'
import { menuItems } from './data/mockData'

function App() {
  const menu = menuItems

  return (
    <>
      <h1 style={{ margin: '0 8px ' }}>Menu</h1>
      <ul>
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  )
}

export default App
