var consumer = require("../model/consumerModel")
var cloudinary = require('cloudinary').v2
module.exports = {
    validation: (arr, body) => {
        for (var i = 0; i < arr.length; i++) {

            var value = null;
            if (body[arr[i]] == undefined) {
                value = arr[i]
                i = i + 1
            }
        }
        return value;
    },
    uploader: async (uploadDocs, callback) => {
        var myres = []
        for (var i = 0; i < uploadDocs.length; i++) {

            await cloudinary.uploader.upload(
                uploadDocs[i].doc,
                (cloudierror, cloudiresult) => {
                    if (cloudierror) {
                        i = uploadDocs.length;
                        callback(cloudierror, null);
                    }
                    else {
                        myres.push(cloudiresult.secure_url);
                        if (i == uploadDocs.length - 1) {
                            callback(null, myres)

                        }
                    }
                })
        }
    }
}