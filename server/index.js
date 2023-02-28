import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import connect from './lib/db.js'
import router from './routes/posts.js'

const app = express()
const port = process.env.PORT || 5000

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cors())
connect()

app.use('/posts', router)



app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);
})