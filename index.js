import express from 'express'
import userRoutes from './src/routes/user.routes.js';
const app = express()

app.use(express.json()) // Middleware para analisar JSON no corpo da requisição
app.use(userRoutes)


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});