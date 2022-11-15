const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: { type: String, required: true },
    optionA: { type: String, required: true},
    optionB: { type: String, required: true},
    optionC: { type: String, required: true},
    optionD: { type: String, required: true},
    answer: { type: String, required: true},
    explanation : { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Question', questionSchema)