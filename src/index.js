import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import compression from 'compression'

import ErrorMiddleware from './Middleware/Error.js'
import MemoryRouter from './Router/index.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compression())
app.use(
  cors({ origin: JSON.parse(process.env.ORIGIN).whitelist, credentials: true })
)

mongoose.connect(process.env.MONGO_URL, JSON.parse(process.env.MONGO_CONFIG))

app.use('/', MemoryRouter)
app.use(ErrorMiddleware)

app.use((req, res) => {
  res.status(400).send('No route found!')
})

app.listen(process.env.PORT)
