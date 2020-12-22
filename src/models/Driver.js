import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const driverSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    team: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        required: true
    },
    date_birth: {
        type: String,
        required: true
    },
    championships: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    versionKey: false,
    timestamps: true
})

driverSchema.plugin(mongoosePaginate);
export default model('Driver',driverSchema)