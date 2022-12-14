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

 // A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET costumes */ 
router.get('/', room_controlers.room_view_all_Page ); 
module.exports = router; 
/* GET detail costume page */ 
router.get('/detail', room_controlers.room_view_one_Page); 
/* GET create costume page */ 
router.get('/create',secured, room_controlers.room_create_Page); 
/* GET create update page */ 
router.get('/update',secured, room_controlers.room_update_Page);
/* GET delete costume page */ 
router.get('/delete',secured, room_controlers.room_delete_Page);



module.exports = router;


