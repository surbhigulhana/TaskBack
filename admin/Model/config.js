const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose
  .connect(
    // "mongodb+srv://surbhigulhana:suru123@cluster0.nqh4qee.mongodb.net/?retryWrites=true&w=majority",
    "mongodb://surbhigulhana:suru123@ac-bxnoi7c-shard-00-00.nqh4qee.mongodb.net:27017,ac-bxnoi7c-shard-00-01.nqh4qee.mongodb.net:27017,ac-bxnoi7c-shard-00-02.nqh4qee.mongodb.net:27017/?ssl=true&replicaSet=atlas-q9u4wc-shard-0&authSource=admin&retryWrites=true&w=majority",
    
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("successfull");
  });










