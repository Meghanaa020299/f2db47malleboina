const mongoose = require("mongoose") 
const roomSchema = mongoose.Schema({ 
    roomName: String, 
    roomNumber: Number, 
    roomShape: String 
}) 
 
module.exports = mongoose.model("Room", 
roomSchema)