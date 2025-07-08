const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

const menuItems = [
  { id: 1, name: 'Pizza', price: 10.99, picture: 'pizza.jpg' },
  { id: 2, name: 'Burger', price: 8.99, picture: 'burger.jpg' },
  { id: 3, name: 'Pasta', price: 12.99, picture: 'pasta.jpg' },
  { id: 4, name: 'Salad', price: 7.99, picture: 'salad.jpg' },
  { id: 5, name: 'Soda', price: 1.99, picture: 'soda.jpg' },
]

app.use(express.json())
app.use(cors())

app.get('/api/menu', (req, res) => {
  res.json(menuItems)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
