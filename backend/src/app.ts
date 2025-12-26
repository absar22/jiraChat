import express, {Application} from 'express'
import cors from 'cors'
import auth from './routes/auth.routes'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', auth)

app.get("/", (_req, res) => {
  res.send("JiraChat backend running")
})

export default app