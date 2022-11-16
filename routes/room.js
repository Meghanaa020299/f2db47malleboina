// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('room', { title: 'Search Results Room' });
// });

// module.exports = router;
var express = require('express'); 
const room_controlers= require('../controllers/room'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', room_controlers.room_view_all_Page ); 
module.exports = router; 
/* GET detail costume page */ 
router.get('/detail', room_controlers.room_view_one_Page); 







module.exports = router;


