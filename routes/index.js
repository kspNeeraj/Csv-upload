const express = require('express');

const multer = require('multer');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, "rev.csv")
    }
  })
   
const upload = multer({ storage: storage })

const router = express.Router();

const home_Controller = require('../controllers/home_controller');

router.get('/',home_Controller.home);

router.post('/submit',upload.single('CSV'),home_Controller.reader);

// router.post('/submit',home_Controller.reader);

// router.get('/',function(req,res){
//     return res.end("<h1>server has ttyutyuytuyt</h1>");
// });


module.exports = router;