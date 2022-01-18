const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name:{type:String,required:true},
  mobile:{type:Number,required:false},
  email:{type:String,required:true},
  password:{type:String,required:false},
  role:[{type:String,required:true}],
  address:{type:String,required:false},
})

module.exports = mongoose.model('users', userSchema);