var User = require('../models/user');
var passport = require('passport');

module.exports = {
  findById: function(id, callback){
    User.findById(id, function(err, user){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, user);
    });
  },
  create: function(params, callback){
    User.register(new User({username: params.username}), params.password, function(err, user){
      if(err){
        console.log(err);
        callback(err, null);
        return;
      }
      passport.authenticate("local")(params.req, params.res, function(){
        callback(null, user);
      });
    });
  }
};
