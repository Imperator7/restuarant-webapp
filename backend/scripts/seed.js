require('dotenv').config()
const mongoose = require('mongoose')
const MenuItem = require('../models/menuItem')

const menuItems = [
  { id: 1, name: 'Pizza', price: 10.99, picture: 'pizza.jpg' },
  { id: 2, name: 'Burger', price: 8.99, picture: 'burger.jpg' },
  { id: 3, name: 'Pasta', price: 12.99, picture: 'pasta.jpg' },
  { id: 4, name: 'Salad', price: 7.99, picture: 'salad.jpg' },
  { id: 5, name: 'Soda', price: 1.99, picture: 'soda.jpg' },
]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('Connected to MongoDB')

    await MenuItem.deleteMany({}) // Clear existing menu items
    console.log('Existing menu items deleted')

    await MenuItem.insertMany(menuItems)
    console.log('Menu items seeded')

    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  } catch (error) {
    console.error(error)
    await mongoose.disconnect()
  }
}

seedDB()
