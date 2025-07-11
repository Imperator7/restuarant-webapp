require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

const menuRouter = require('./routes/menu')

app.use(cors())
app.use(express.json())

// database connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})

app.use('/api/menu', menuRouter)

app.get('/api/test', (req, res) => {
  res.json({ message: `Hello from the backend!` })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
