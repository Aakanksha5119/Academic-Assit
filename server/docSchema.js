import mongoose from 'mongoose';

const docschema = mongoose.Schema({
    Subject: String,
    Unit1: [String],
    Unit2: [String],
    Unit3: [String],
    Unit4: [String],
    Unit5: [String],
    QuestionPapers:[String],
    YouTube:String
})

var DocSchema = mongoose.model('docSchema', docschema);

export default DocSchema;