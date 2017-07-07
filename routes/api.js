var express = require('express');
var router = express.Router();
var Controllers = require("../controllers");
var User = require("../models/user");
var passport = require('passport');

// check if user is logged in 
router.get('/verify', function(req, res,next){
  if(req.isAuthenticated()){
    return res.json({
      confirmation: 'success',
      result: req.user
    });
  } else {
    return res.json({
      confirmation: 'success',
      result: null
    });
  }
});

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

// login the user
router.post('/session', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      let errorObj = {
        name: "Invalid",
        message: "Invalid username or password"
      };
      return res.json({
        confirmation: "fail",
        message: errorObj
      });
    }
    req.logIn(user, function(err1){
      if (err1) {
        return next(err1);
      }
      return res.json({
        confirmation: "success",
        result: user
      });
    });
  })(req, res, next);
});


// need to separate user and others
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

  controller.create(params, function(err, result){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    //will have to change
    let user = {};
    user.username = result.username;
    user.id = result._id;
    res.json({
      confirmation: 'success',
      result: user
    });
  });
});

router.delete('/logout', function(req, res){
  req.logout();
  return res.json({
    confirmation: 'success',
    result: null
  });
});


module.exports = router;
