var express = require('express');
var router = express.Router();
var Controllers = require("../controllers");
var User = require("../models/user");
var passport = require('passport');


// grab all videos from the category model
router.get('/:resource', function(req, res, next){
  //use req.query for data send down from utilAPi
  var resource = req.params.resource;
  var controller = Controllers[resource];

  if(controller === null){
    res.json({
      confirmation: 'fail',
      message: 'Invaild resource request: '+ resource
    });
    return;
  }

  controller.find(req.query, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    // console.log('----------results----------')
    // console.log(results) //try to make this into an object
    res.json({
      confirmation: 'success',
      results: results
    });
  });
});


//grab one video from the video model
router.get('/:resource/:id', function(req, res, next){
  var resource = req.params.resource;
  var id = req.params.id;
  var controller = Controllers[resource];

  if(controller === null){
    res.json({
      confirmation: 'fail',
      message: 'Invaild resource request: '+ resource
    });
    return;
  }

  controller.findById(id, function(err, result){
    if(err){
      res.json({
        confirmation: 'fail',
        message: 'Not Found'
      });
      return;
    }
    res.json({
      confirmation: 'success',
      result: result
    });
  });
});


router.post('/:resource', function(req,res,next){
  var resource = req.params.resource;
  var controller = Controllers[resource];
  var params;

  if(controller === null){
    res.json({
      confirmation: 'fail',
      message: 'Invaild resource request: '+ resource
    });
    return;
  } else if(resource === "user"){
    params = {};
    params.req = req;
    params.res = res;
    params.username = req.query.username;
    params.password = req.query.password;
  } else {
    params = req.query;
  }

  controller.create(params, function(err, user){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'success',
      result: user
    });
  });
});


module.exports = router;
