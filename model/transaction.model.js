import mongoose from 'mongoose';

const transactionScShema = mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    date_of_transaction:{
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("transaction", transactionScShema);