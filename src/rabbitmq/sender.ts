import amqp from 'amqplib/callback_api'
import { notificationMsgTypes, shippedQueueMsgTypes } from '../interfaces/types';

export default async function connectRabbitMQ (bindingKey:string, notificationMsg:notificationMsgTypes) {
    amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
    
            // notification queue
            var queue = bindingKey
            channel.assertQueue(queue, {
                durable: true
            });
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(notificationMsg)), {
                persistent: true
            });
    
            console.log(" [x] Sent %s", notificationMsg);
        });
        // setTimeout(function() {
        //     connection.close();
        //     process.exit(0);
        // }, 500);
    });
}