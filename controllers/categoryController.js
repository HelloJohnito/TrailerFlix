var Category = require('../models/category');


module.exports = {

  find: function(params, callback){
    Category.findOne({num:1}).populate("action").populate("comedy").populate("romance").populate("documentary").populate("fantasy").populate("horror").populate("family").populate("mystery").exec(function(err, category){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, category);
    });
  }

};
