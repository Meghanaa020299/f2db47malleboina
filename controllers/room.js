var Room = require('../models/room'); 
 
// List of all Costumes 
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
exports.room_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: room detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.room_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Room(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
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
exports.room_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: room delete DELETE ' + req.params.id); 
}; 
 
// Handle room update form on PUT. 
exports.room_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: room update PUT' + req.params.id); 
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