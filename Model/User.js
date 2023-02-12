const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    fname : {
        type : String,
        required : true,
    },
    lname : {
        type : String,
        required : true,
    },
    pass : {
        type : String,
        required : true,
    }
},
{
  timestamps: true,
})


module.exports =  mongoose.model("User", userSchema);