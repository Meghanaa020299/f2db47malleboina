const mongoose = require("mongoose")


const roomSchema = mongoose.Schema({
    roomName:{
    type: String,
    maxLength: 7
}, 
roomNumber: Number,

roomShape: String
})
module.exports = mongoose.model("Room", roomSchema)






