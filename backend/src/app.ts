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

// Debug logging
app.use((req, _res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use('/api/auth', auth)

app.post('/test-otp', (req, res) => {
  console.log('Inline test-otp hit');
  res.json({ message: 'Inline route working' });
});

app.get("/", (_req, res) => {
  res.status(200).json({ message: 'JiraChat backend running' })
})

export default app
