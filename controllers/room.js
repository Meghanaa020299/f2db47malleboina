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
 
// Handle room create on POST. 
exports.room_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: room create POST'); 
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