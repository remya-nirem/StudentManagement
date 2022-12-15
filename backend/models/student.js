const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

let StudentDATA = mongoose.model('studentdetail',StudentSchema);

module.exports = StudentDATA;