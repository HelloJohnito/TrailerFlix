var mongoose = require("mongoose");
var Video = require("./models/video");
var Category = require("./models/category");


var videoData = [
  {
    name: "this is action1",
    youtube_id: "testing",
    img: "https://s-media-cache-ak0.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg",
    description: "hello",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "action2",
    youtube_id: "testing",
    img: "http://graphicdesignjunction.com/wp-content/uploads/2011/12/grey-movie-poster.jpg",
    description: "yya",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "action3",
    youtube_id: "testing",
    img: "https://s-media-cache-ak0.pinimg.com/736x/41/2f/96/412f96d1d0a926436fc4cc2c755fac18.jpg",
    description: "yya",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "action4",
    youtube_id: "testing",
    img: "https://s-media-cache-ak0.pinimg.com/736x/06/cb/33/06cb338efcf3ac37a90caad05fd356a2.jpg",
    description: "yya",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "action5",
    youtube_id: "testing",
    img: "http://www.hollywoodreporter.com/sites/default/files/custom/Blog_Images/avengers-movie-poster-1.jpg",
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
