var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var room_controller = require('../controllers/room'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// room ROUTES /// 
 
// POST request for creating a room.  
router.post('/rooms', room_controller.room_create_post); 
 
// DELETE request to delete room. 
router.delete('/rooms/:id', room_controller.room_delete); 
 
// PUT request to update room. 
router.put('/room/:id', room_controller.room_update_put); 
 
// GET request for one room. 
router.get('/rooms/:id', room_controller.room_detail); 
 
// GET request for list of all room items. 
router.get('/rooms', room_controller.room_list); 
 
module.exports = router; 