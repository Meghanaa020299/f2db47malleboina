var Room = require('../models/room'); 
 
// List of all rooms 
exports.room_list = async function(req, res) { 
    try{ 
        theRooms = await Room.find(); 
        res.send(theRooms); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific room. 
//exports.room_detail = function(req, res) { 
 //   res.send('NOT IMPLEMENTED: room detail: ' + req.params.id); 
//}; 
// for a specific room. 
exports.room_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Room.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle room create on POST. 
exports.room_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Room(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"room_type":"goat", "cost":12, "size":"large"} 
    document.roomName = req.body.roomName; 
    document.roomNumber = req.body.roomNumber; 
    document.roomShape = req.body.roomShape; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle room delete form on DELETE. 
exports.room_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Room.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle room update form on PUT. 
// exports.room_update_put = function(req, res) { 
//    res.send('NOT IMPLEMENTED: room update PUT' + req.params.id); 
// }; 
exports.room_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Room.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.roomName)  
               toUpdate.roomName = req.body.roomName; 
        if(req.body.roomNumber) toUpdate.roomNumber = req.body.roomNumber; 
        if(req.body.roomShape) toUpdate.roomShape = req.body.roomShape; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// VIEWS 
// Handle a show all view 
exports.room_view_all_Page = async function(req, res) { 
    try{ 
        theRooms = await Room.find(); 
        res.render('room', { title: 'Room Search Results', results: theRooms }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
exports.room_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Room.findById( req.query.id) 
        res.render('roomdetail',  
{ title: 'room Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

