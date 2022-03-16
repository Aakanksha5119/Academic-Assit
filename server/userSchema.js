import mongoose from 'mongoose';

const userschema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    email: {
        type:  String,
        unique:true
      },    
    Password: String
})

var UserSchema = mongoose.model('userSchema', userschema);

export default UserSchema;