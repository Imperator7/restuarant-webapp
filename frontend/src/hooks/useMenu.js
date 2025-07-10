import { useState, useEffect } from 'react'
import axios from 'axios'

export function useMenu() {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/api/menu')
      .then((response) => {
        console.log('Menu items fetched:', response.data)
        setMenuItems(response.data)
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error)
        setMenuItems([]) // Set to empty array on error
      })
  }, [])

  return { menuItems }
}
