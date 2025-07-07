import './App.css'

function App() {
  const menu = [
    { id: 1, name: 'Pizza', price: 10.99, picture: 'pizza.jpg' },
    { id: 2, name: 'Burger', price: 8.99, picture: 'burger.jpg' },
    { id: 3, name: 'Pasta', price: 12.99, picture: 'pasta.jpg' },
    { id: 4, name: 'Salad', price: 7.99, picture: 'salad.jpg' },
    { id: 5, name: 'Soda', price: 1.99, picture: 'soda.jpg' },
  ]

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
