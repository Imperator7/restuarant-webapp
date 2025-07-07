import './App.css'
import { menuItems } from './data/mockData'

function App() {
  const menu = menuItems

  return (
    <>
      <h1>Menu</h1>
      <ul>
        {menu.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            style={{ backgroundImage: `url(${item.picture})` }}
          >
            {item.name} - ${item.price.toFixed(2)}
          </div>
        ))}
      </ul>
    </>
  )
}

export default App
