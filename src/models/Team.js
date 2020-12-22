import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const teamSchema = new Schema({
    team: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String,
        required: true
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

teamSchema.plugin(mongoosePaginate);
export default model('Team',teamSchema)