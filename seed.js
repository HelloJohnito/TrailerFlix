var mongoose = require("mongoose");
var Video = require("./models/video");
var Category = require("./models/category");


var videoData = [
  {
    name: "this is action1",
    youtube_id: "testing",
    img: "imageurl",
    description: "hello",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "action2",
    youtube_id: "testing",
    img: "imageurl",
    description: "yya",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "comedy",
    youtube_id: "twhh",
    img: "imageurl",
    description: "yiihair",
    rating: 4,
    category: "comedy",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "romance",
    youtube_id: "twhh",
    img: "imageurl",
    description: "yiihair",
    rating: 4,
    category: "romance",
    // releaseDate: Date.now,
    comments: []
  }
];


function seedDB(){

  //REMOVE
  // Video.remove({}, function(err){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log("removed Video!");
  // });
  //
  // Category.remove({}, function(err){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log("removed Category");
  // });


  //SetUp
  // Category.create({num: 1}, function(err, category){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log("------added category-----");
  //   console.log(category);
  // });
  //
  //
  // videoData.forEach(function(video){
  //   Video.create(video, function(err, createdVideo){
  //     if(err){
  //       console.log(err);
  //       return;
  //     }
  //     Category.findOne({num: 1}, function(err1, category){
  //       if(err1){
  //         console.log("error when pushing video into category");
  //         return;
  //       }
  //       category[createdVideo.category].push(createdVideo);
  //       category.save();
  //     });
  //     console.log("Video was created");
  //   });
  // });

}

module.exports = seedDB;
