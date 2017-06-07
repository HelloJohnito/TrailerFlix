var Video = require("../models/video");

module.exports = {

  find: function(params, callback){
    Video.find(params, function(err, videos){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, videos);
    });
  },

  findById: function(id, callback){
    Video.findById(id, function(err, video){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, video);
    });
  },

  create: function(params, callback){
    Video.create(params, function(err, video){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, video);
      // Here we will want to add the video to its category.
    });
  },

  update: function(id, params, callback){
    Video.findByIdAndUpdate(id, params, {new: true}, function(err, video){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, video);
    });
  },

  delete: function(id, callback){
    Video.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, null);
    });
  }
};
