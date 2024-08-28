import mongoose from "mongoose";
import { fulfillmentSchemaTypes } from "../interfaces/types";

const fulfillmentSchema = new mongoose.Schema<fulfillmentSchemaTypes>({
    shippmentID: {
        type: String || mongoose.SchemaTypes.UUID,
        require: true,
        unique: true
    },
    orderID: {
        type: String || mongoose.SchemaTypes.UUID,
        require: true,
        unique: true
    },
    paymentID: {
        type: String || mongoose.SchemaTypes.UUID,
        require: true,
        unique: true
    },
    userID: {
        type: String || mongoose.SchemaTypes.ObjectId,
        require: true
    },
    fulfilledStatus: {
        type: Boolean,
        default: false
    }
})

const fulfillmentModel = mongoose.model('Shipping Details', fulfillmentSchema)

export default fulfillmentModel