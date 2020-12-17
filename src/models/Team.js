import { Schema, model } from 'mongoose';

const teamSchema = new Schema({
    team: {
        type: String,
        required: true,
        trim: true
    },
    year_foundation: {
        type: Number,
        trim: true
    },
    driver1: {
        type: String,
        required: true
    },
    driver2: {
        type: String,
        required: true
    },
    team_chief: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Team',teamSchema)