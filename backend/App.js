const express = require('express')
const cors= require('cors')
const productRoutes = require('./src/routes/product.routes')
require('dotenv').config()
require('./src/config/db')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})