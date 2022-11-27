const mongoose = require("mongoose")


const roomSchema = mongoose.Schema({
    roomName:{
    type: String,
    maxLength: 7
}, 
roomNumber: Number,

roomShape:{
  type: String,
  minLength:3
}

})
module.exports = mongoose.model("Room", roomSchema)






