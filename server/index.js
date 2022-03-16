import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import UserSchema from './userSchema.js';
import DocSchema from './docSchema.js';
//import { selectedSub } from '../client/src/components/Home/code.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const PORT = process.env.PORT|| 5000;
console.log('server running at', PORT);
mongoose.connect("mongodb://localhost:27017/project_new", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



//registration
app.post("/Register",(req,res)=>{
  console.log(req.body) 
  const {Firstname,Lastname,email,password} =req.body;
  UserSchema.findOne({email:email},(err,user)=>{
      if(user){
          res.send({message:"user already exist"})
      }else {
          const user = new UserSchema({
            FirstName: Firstname,
            LastName: Lastname,
            email: email,
            Password: password
          })
          user.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"sucessfull"})
              }
          })
      }
  })
}
)
//login
app.post("/Login",(req,res)=>{
  console.log("correct :",req.body);
  const {email,password} =req.body;
  console.log("email  :",email);
  console.log("pass",password)
  UserSchema.findOne({email:email},(err,user)=>{
      if(user){
        console.log(user.email);
        console.log(user.Password);
         if(password === user.Password){
             res.send({message:"login sucessfull",user:user})
         }else{
             res.send({message:"wrong credentials"})
         }
      }else{
          res.send("not register")
      }
  })
});

//Resource
app.post("/Resource",(req,res)=>{
    console.log("correct :",req.body);
    const { test,subj } =req.body;
    console.log("choosen sub  :",subj,test);
    DocSchema.findOne({Subject:test},(err,user)=>{
        console.log(user);       
        res.send({user})

           }
    )
  });