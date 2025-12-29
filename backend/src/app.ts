import express, { Application } from 'express'
import cors from 'cors'
import auth from './routes/auth.routes'
import morgan from 'morgan'

const app: Application = express()

console.log('app.ts is running')

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', auth)

app.get("/", (_req, res) => {
  res.status(200).json({ message: 'JiraChat backend running' })
})

export default app
