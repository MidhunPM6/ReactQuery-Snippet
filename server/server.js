import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3008

app.use(express.json())
app.use(cors())

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
  { id: 4, name: 'Diana', email: 'diana@example.com', role: 'Manager' },
  { id: 5, name: 'Ethan', email: 'ethan@example.com', role: 'User' },
  { id: 6, name: 'Fiona', email: 'fiona@example.com', role: 'User' },
  { id: 7, name: 'George', email: 'george@example.com', role: 'Developer' },
  { id: 8, name: 'Hannah', email: 'hannah@example.com', role: 'User' },
  { id: 9, name: 'Ian', email: 'ian@example.com', role: 'Tester' },
  { id: 10, name: 'Julia', email: 'julia@example.com', role: 'Manager' },
  { id: 11, name: 'Kevin', email: 'kevin@example.com', role: 'User' },
  { id: 12, name: 'Lily', email: 'lily@example.com', role: 'Designer' }
]

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  const newUser = req.body
  users.push(newUser)
  res.status(201).json(newUser)
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
