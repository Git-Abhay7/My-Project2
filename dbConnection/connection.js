var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/project",(
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}))

mongoose.connection
.once("open",()=>{
console.log("Database coneection establish.")})
.on("error",error=>{
    console.log("Error occured.",error)
})