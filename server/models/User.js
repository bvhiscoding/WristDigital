const mongoose = require("mongoose");

const User = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please provide your fullname"],
  },
  email:{
    type: String, 
    required: [true,'Please provide your email'],
    
  }
});
 