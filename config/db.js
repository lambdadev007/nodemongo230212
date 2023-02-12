const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI , {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(() => {
    console.log("mongodb connected.");
}).catch((err) => {
    console.log("error occured");
})