require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
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

app.use(cors())
app.use(express.json())

// database connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})

app.get('/api/menu', (req, res) => {
  res.json(menuItems)
})

app.get('/api/test', (req, res) => {
  res.json({ message: `Hello from the backend!` })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
