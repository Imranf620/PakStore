
import express from 'express';
import dotenv from 'dotenv'
import connectDatabase from './middleware/connectDb.js';
import userRoute from "./routes/userRoute.js"
import error from './middleware/error.js';

dotenv.config()
connectDatabase()

const port: number = 4000

const app = express();
app.use(express.json())

app.use('/api/v1/user', userRoute)

app.use(error)

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})