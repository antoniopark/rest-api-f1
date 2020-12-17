import { Schema, model } from 'mongoose';

const driverSchema = new Schema({
    name: {
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
    world_champ: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Driver',driverSchema)