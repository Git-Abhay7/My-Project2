var consumer = require("../model/consumerModel")
var commonFunction = require("../commonFunction/commonFunction")
var cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: "dcr0kojmy",
    api_key: "71597214XXXXX",
    api_secret: "N28-5FupR4PIfEpn1XXXXXX"
});

module.exports = {
    addConsumer: (req, res) => {
        var arr = ["firstName", "lastName", "email", "idNumber", "mobileNumber"]
        var restrict = commonFunction.validation(arr, req.body)
        if (restrict) {
            res.send(`${restrict} is required.`)
        }
        else {
            var query = { $or: [{ email: req.body.email }, { mobile: req.body.mobile }, { idNumber: req.body.idNumber }], status: "ACTIVE" }
            consumer.findOne(query, (error, result) => {

                if (error) {
                    res.send({ responseCode: 500, responseMessage: "Internal server error..", error })
                }
                else if (result) {
                    if (result.email == req.body.email) {
                        res.send({ responseCode: 409, responseMessage: "Email already exist." })
                    }
                    else if (result.mobile == req.body.mobile) {
                        res.send({ responseCode: 409, responseMessage: "Mobile number already exist." })
                    }
                }
                else {
                    commonFunction.uploader(req.body.uploadDocs, (Uerror, result1) => {
                        if (error) {
                            res.send({ responseCode: 500, responseMessage: "Internal server error.!!!!!!!", Uerror })
                        }
                        else {
                            req.body.uploadDocs.doc = result1
                            new consumer(req.body).save((error, fresult) => {
                                if (error) {
                                    res.send({ responseCode: 500, responseMessage: "Internal server error..", error })
                                }
                                else {
                                    res.send({ resposneCode: 200, resposneMessage: "Signup sucessfully.", fresult })
                                }
                            })
                        }
                    })
                }
            })
        }
    }
}
