import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'


const DB_HOST = 'mongodb+srv://Ivans-aba-zhur:Fr86Ky5YrRmthU7X@cluster0.zox6x.mongodb.net/?retryWrites=true&w=majority'


const app = express()

// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 
// }
app.use(cors())


mongoose.connect(DB_HOST)
    .then(() => {
    app.listen(4751)
    console.log("Database connect succsess")
    })
    .catch(error => {
        console.log(error.message)
        process.exit(1)
    })

app.get('/', (req, res, next) => {
    console.log('Hellow')
})