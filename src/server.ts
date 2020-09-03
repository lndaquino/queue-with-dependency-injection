import 'reflect-metadata';
import 'dotenv/config'
import express from 'express'
import UserController from '../src/controllers/UserController'

const app = express();
app.use(express.json())

app.post('/users', UserController.store)

app.listen(3333, ()=>{console.log('Main server started on port 3333')})