const express = require('express')
const router = express.Router()
const MenuItem = require('../models/menuItem')

router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find({})

    if (!menuItems || menuItems.length === 0) {
      return res.status(404).json({ message: 'No menu items found' })
    }

    const formattedMenuItems = menuItems.map((item) => {
      return {
        id: item._id.toString(), // Convert ObjectId to string
        name: item.name,
        price: item.price,
        picture: item.picture || null, // Handle optional picture field
      }
    })

    res.json(formattedMenuItems)
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch menu items' })
  }
})

module.exports = router
