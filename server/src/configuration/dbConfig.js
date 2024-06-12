const mongoose = require('mongoose');

const dbconnect=async ()=>
{
    try {
        await mongoose.connect("mongodb://pratyush_1:pratyush_123@ac-f86lnmh-shard-00-00.pat7oxj.mongodb.net:27017,ac-f86lnmh-shard-00-01.pat7oxj.mongodb.net:27017,ac-f86lnmh-shard-00-02.pat7oxj.mongodb.net:27017/?ssl=true&replicaSet=atlas-5m9xut-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
        console.log("dp is up");
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbconnect;