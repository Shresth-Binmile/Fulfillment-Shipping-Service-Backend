import express, { Request, Response } from 'express'
import ENV from './config/server-config'
import { StatusCodes } from 'http-status-codes'
import messages from './utils/messages'
import connectDB from './utils/connectDB'
import { response } from './common/responses'
import { urls } from './utils/enums'
import recieveFromRabbitMQ from './rabbitmq/reciever'
import router from './routes/route'

const app = express()

app.use(express.json())
app.use(urls.BASE, router)

app.get('/', (req:Request, res:Response)=>{
    try {
        response({res:res, statusCode:StatusCodes.OK, success:true, message:messages.SERVER_HEALTHY})
    } catch (error:any) {
        response({res:res, statusCode:StatusCodes.INTERNAL_SERVER_ERROR, success:false, message:messages.SERVER_UNHEALTHY, error: {error}})
    }
})

app.listen(ENV.PORT, async()=>{
    try {
        await connectDB()
        console.log(`Server is running on http://localhost:${ENV.PORT}/`)
        console.log(messages.DB_CONNECTED)
        recieveFromRabbitMQ()
    } catch (error) {
        console.log('Error Listen: ', error)
    }
})