import ENV from "../config/server-config"

const messages = {
    SERVER_HEALTHY: 'Microservice for Order Creation & Updation is up & running!',
    SERVER_UNHEALTHY: 'Unable to fetch requests!',
    DB_CONNECTED: 'Connected to MongoDB',
    NOT_FULFILLED: 'Your request cannot be fulfilled at the moment!', 
    ORDER_CREATED: 'Order Created Successfully!',
    ORDER_UPDATE_SUCCESS: 'Order Updated Successfully!',
    ORDER_UPDATE_FAILED: 'Unable to update order!',
    SOMETHING_WENT_WRONG: 'Something went wrong!',
    ORDER_NOT_IN_DB: 'Order not present in Database!',
    PAYMENT_SUCCESS: 'Payment Successfull!',
    PAYMENT_FAILED: 'Payment Failed!',
    RABBIT_CONNECTED: 'Connected to RabbitMQ successfully!!',
    AUTH_FAILED: 'User Authentication Failed!',
    AUTH_SUCCESS: 'User Authentication Successfull!',
    MESSAGE_RECIEVED: 'Message recieved successfully!!',
    MESSAGE_SEND: 'Message send successfully!!',
    NO_CONTENTS_RECIEVED: 'Error: No Contents Recieved!',
    TOKEN_NOT_FOUND: 'Token not found!',
    REDIS_CONNECTED: `Redis Client successfully connected and is running on PORT: ${ENV.REDIS_PORT}`,
    SERVER_RUNNING: `Server is running on http://localhost:${ENV.PORT}/`
}

export default messages