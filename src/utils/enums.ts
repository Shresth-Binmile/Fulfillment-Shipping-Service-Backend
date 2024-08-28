
export enum urls {
    BASE = '/api/v1',
    ORDER_CREATE = '/createOrder',
    ORDER_UPDATE = '/updateOrder',
    PAYMENT_PROCESS = '/processPayment',
    FULFILL_ORDER = '/fulfillOrder',
    USER_CREATE = '/register',
    USER_AUTH = '/login'
}

export enum bindingKeys {
    ORDER_CREATED = 'order.created',
    ORDER_UPDATED = 'order.updated',
    PAYMENT_PROCESSED = 'payment.processed',
    ORDER_FULFILLED = 'order.fulfilled',
    NOTIFY_MESSAGES = 'messages.notify',
    SHIPPMENT_MESSAGES = 'messages.shippment'
}

export enum notifications {
    ORDER_CREATED = 'Order Created Successfully!',
    ORDER_UPDATED = 'Order Updated Successfully!',
    PAYMENT_FAILED = 'Payment Failed for orderID: ',
    PAYMENT_SUCCESS = 'Payment Success for orderID: ',
    FULFILLMENT_MSG = 'Order will be recieved by'
}