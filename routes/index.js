const express = require('express');

const router = express.Router();

const home_Controller = require('../controllers/home_controller');

router.get('/',home_Controller.home);

// router.get('/',function(req,res){
//     return res.end("<h1>server has ttyutyuytuyt</h1>");
// });


module.exports = router;