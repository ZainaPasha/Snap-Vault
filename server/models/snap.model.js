import mongoose from 'mongoose';

const snapSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Snap = mongoose.model('Snap', snapSchema);

export default Snap;