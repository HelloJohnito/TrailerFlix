var Category = require('../models/category');


module.exports = {

  find: function(params, callback){
    Category.findOne({num:1}, function(err, category){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, category);
    });
  }

};
