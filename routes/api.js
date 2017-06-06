var express = require('express');
var router = express.Router();
var VideoController = require('../controllers/videoController');
var Controllers = require("../controllers");

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource;
  var controller = Controllers[resource];

  if(controller === null){
    res.json({
      confirmation: 'fail',
      message: 'Invaild resource request: '+ resource
    });
  }

  controller.find(req.query, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'success',
      results: results
    });
  });
});

router.get('/:resource/:category', function(req, res, next){
  var resource = req.params.resource;
  var category = req.params.category;
  var controller = Controllers[resource];

  if(controller === null){
    res.json({
      confirmation: 'fail',
      message: 'Invaild resource request: '+ resource
    });
  }

  controller.find({category: category}, function(err, results){
      if(err){
        res.json({
          confirmation: 'fail',
          message: err
        });
        return;
      }
      res.json({
        confirmation: 'success',
        results: results
      });
  });
});


router.get('/:resource/:category/:id', function(req, res, next){
  var resource = req.params.resource;
  var id = req.params.id;
  var controller = Controllers[resource];

  if(controller === null){
    res.json({
      confirmation: 'fail',
      message: 'Invaild resource request: '+ resource
    });
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

  if(controller === null){
    res.json({
      confirmation: 'fail',
      message: 'Invaild resource request: '+ resource
    });
  }

  controller.create(req.body, function(err, result){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'success',
      result: result
    });
  });
});


module.exports = router;
