const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/LoginSignup",  {
   useUnifiedTopology: true,
   useNewUrlParser: true,
 })//to connect to node 
.then(()=>{
   console.log("mongodb connected")
})
.catch(()=>{
   console.log("failed to connect")
})

const Joi = require("joi");

// const User = mongoose.model("user", LogSchema);const validate = (user) => {  const schema = Joi.object({    name: Joi.string().min(3).max(255).required(),    email: Joi.string().email().required(),  });  return schema.validate(user);};module.exports = {  User,validate,};

const LogSchema = new mongoose.Schema({
   email02:{
      type: String,
      required:true
   },

   pass3:{
      type: String,
      required:true,
      min: 6,
      max: 12,
   }
})

const SignSchema = new mongoose.Schema({
   fname:{
      type: String,
   },

   fname:{
      type: String,
   },

   email01:{
      type: String,
   },

   pass:{
      type: String,
      min: 6,
      max: 12,
   },

   repass:{
      type: String,
      min: 6,
      max: 12,
   }
})

const Logcollection = new mongoose.model("collection1",LogSchema)
module.exports = Logcollection

const collection = new mongoose.model("collection2",SignSchema)
module.exports = collection




module.exports = async function connection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.DB, connectionParams);
    console.log("connected to database.");
  } catch (error) {
    console.log(error, "could not connect to database.");
  }
};

module.exports = {
   LogSchema,
 };