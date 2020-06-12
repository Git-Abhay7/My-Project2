var express = require("express")
var bodyParser=require("body-parser")
require("./dbConnection/connection")
var app = express();
const port = 7070;

var consumerRouter=require("./Router/consumerRouter")
app.get('/',(req,res)=>{
    res.send("<h1>SERVER IS RUNNING SMOOTHLY </h1>")
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use("/consumer",consumerRouter)
app.listen(port,()=>{
    console.log(`Server is ruuning at port ${port}`)
})