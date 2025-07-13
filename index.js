import express from 'express'
import { use } from 'react'
const app = express()
app.use(express.json()) // Middleware para analisar JSON no corpo da requisição

const users = []

//1° Parte da Rota é
// Metodos possiveis de rota GET, POST, PUT, DELETE
//2° Parte da Rota é o Name =>/ - sempre no plural
// cal

app.post('/users', (req, res) => {
  const body = req.body
  users.push(body)
  res.status(201).send('User created successfully')
})
app.get('/users', (req, res) => {
  res.json({message:"Estes são os usuários", users})
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});