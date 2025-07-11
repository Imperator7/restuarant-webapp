const express = require('express')
const router = express.Router()
const MenuItem = require('../models/menuItem')

router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find({})

    if (!menuItems || menuItems.length === 0) {
      return res.status(404).json({ message: 'No menu items found' })
    }

    menuItems.forEach((item) => {
      item._id = item._id.toString() // Convert ObjectId to string for easier handling
      item.picture = item.picture || 'default.jpg' // Set a default picture if none exists
    })

    res.json(menuItems)
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch menu items' })
  }
})

module.exports = router
