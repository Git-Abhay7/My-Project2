var router=require("express").Router();
var controller=require("../dbController/controller")

router.post("/addConsumer",controller.addConsumer)


module.exports=router;