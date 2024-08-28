import amqp from 'amqplib/callback_api'
import messages from '../utils/messages'
import { notificationMsgTypes, paymentQueueMsgTypes, shippedQueueMsgTypes } from '../interfaces/types'
import fulfillmentModel from '../models/FulfillmentModel'
import {v4 as uuidv4} from 'uuid'
import connectRabbitMQ from '../rabbitmq/sender'
import { bindingKeys, notifications } from '../utils/enums'

export async function processOrderFulfillment(msg:amqp.Message) {
    try {
        // consume processed payments from rabbitmq server
        // change the recieved msg into desired format
        const contents = msg.content.toString()

        if(!contents){
            throw new Error(messages.NO_CONTENTS_RECIEVED)
        }

        const parsedContents:paymentQueueMsgTypes = JSON.parse(contents)
        const {userID, orderID, status, paymentID} = parsedContents

        // process the fulfillment...
        const shippmentID = uuidv4()
        if(status === false){
            // publish every event where payment status is a failure to rabbitmq server
            const notificationMsg:notificationMsgTypes = {
                userID,
                orderID,
                message: `${notifications.PAYMENT_FAILED}${orderID}`
            }

            await connectRabbitMQ(bindingKeys.NOTIFY_MESSAGES, notificationMsg)
            return
        }
        // after processing save it to DB.
        const newOrderFulfillment = new fulfillmentModel({
            userID,
            orderID,
            paymentID,
            fulfilledStatus: false,
            shippmentID
        })
        await newOrderFulfillment.save()

        // publish every event where payment status is a success to rabbitmq server
        const notificationMsg:notificationMsgTypes = {
            userID,
            orderID,
            shippmentID,
            message: `${notifications.FULFILLMENT_MSG} ${Date.now() + 2}`
        }

        await connectRabbitMQ(bindingKeys.NOTIFY_MESSAGES, notificationMsg)
        console.log('Program Ended')
    } catch (error) {
        console.log('Error from processOrderFulfillment:', error)
    }
}