import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import routes from './routes'

const app = express()

app.use(helmet())
app.use(morgan('combined'))
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:true, limit:'50mb'}))

app.use('/user', routes.UserRouter)

app.use((req, res) =>{
    res.status(404).send('404 page no found')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo por el puerto: ${process.env.PORT}`)
})