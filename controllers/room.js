var Room = require('../models/room'); 
 
// List of all rooms 
exports.room_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: room list'); 
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