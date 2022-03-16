import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/project_new", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected")).catch((error) => console.log(`${error} did not connect`));
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

const Subject = "ai";

const Unit1= ['https://drive.google.com/file/d/18cJab2fEjg-0XW-jcxpAKJdpnUo9jjio/view?usp=sharing',
                'https://drive.google.com/uc?export=download&id=18cJab2fEjg-0XW-jcxpAKJdpnUo9jjio'];
const Unit2= ['https://drive.google.com/file/d/1ewv0tjpt8ojefK_7P1fo-n70lPjAvFTZ/view?usp=sharing',
                'https://drive.google.com/uc?export=download&id=1ewv0tjpt8ojefK_7P1fo-n70lPjAvFTZ'];
const Unit3= ['',
                ''];
const Unit4= ['',
                ''];
const Unit5= ['',
                ''];
const QuestionPapers=['',
                ''];
const YouTube='https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O';

const doc = new DocSchema({Subject, Unit1,Unit2,Unit3,Unit4,Unit4,Unit5,QuestionPapers,YouTube })

try {
    await doc.save();
} catch (error) {
  console.log("error ",error);
}
console.log("1 row inserted");
mongoose.connection.close();