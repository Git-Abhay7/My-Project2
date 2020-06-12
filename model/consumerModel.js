const mongoose = require("mongoose")
var schema = mongoose.Schema
var consumerKey = new schema({
    consumerID: {
        type: Number
    },
    registrationDate: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCK", "DELETE"],
        default: "ACTIVE"
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    tel: {
        type: Number
    },
    DOB: {
        type: Number
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    nationality: {
        type: String
    },
    language: {
        type: String
    },
    myLocationsHome: {
        type: Number
    },
    addressLine1: {
        type: String
    },
    poBox: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    myLocationOffice: {
        type: String
    },
    moreLocations: {
        location: {
            type: String
        }
    },
    myInterests: {
        type: String
    },
    mySocialAccounts: [{
        name: {
            type: String
        },
        url: {
            type: String
        }

    }],
    company: {
        type: String
    },
    designation: {
        type: String
    },
    education: {
        type: String
    },
    college: {
        type: String
    },
    university: {
        type: String
    },
    relationshipStatus: {
        type: String
    },
    spouseName: {
        type: String
    },
    spouseMobile: {
        type: Number
    },
    spouseEmail: {
        type: String
    },
    skills: {
        type: String
    },
    accomplishment: {
        type: String
    },
    groups: {
        type: String
    },
    friend: [{
        fname: {
            type: String
        },
        fmobile: {
            type: Number
        },
        femail: {
            type: String
        }
    }],
    validIdType: {
        type: String
    },
    idNumber: {
        type: String
    },
    idExpiry: {
        type: String
    },
    alerts: {
        types: String
    },
    favourites: {
        type: String
    },
    myList: {
        type: String
    },
    cardsHolder: {
        type: String
    },
    specialComments: {
        type: String
    },
    uploadDocs: [
        {
            docType: {
                type: String
            },
            doc: {
                type: String
            }
        }
    ],
},
    {
        timestamps: true,
    })
module.exports = mongoose.model("consumer", consumerKey, "consumer")