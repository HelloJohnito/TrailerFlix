var mongoose = require("mongoose");
var Video = require("./models/video");
var Category = require("./models/category");


var videoData = [
  {
    name: "Avengers",
    youtube_id: "eOrNdBpGMv8",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,q_auto:low,w_631/v1498430686/avenger_sairy7.jpg",
    description: "Avengers",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Bourne Ultimatum",
    youtube_id: "ZT2ZxjUjSo0",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430692/bourn_moi9pm.jpg",
    description: "Bourne Ultimatum",
    rating: 5,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Fight Club",
    youtube_id: "SUXWAEX2jlg",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430695/fightclub_ljt50y.jpg",
    description: "Fight Club",
    rating: 5,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Wonder Woman",
    youtube_id: "VSB4wGIdDwo",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430725/wonderwoman_l0txww.jpg",
    description: "Wonder Woman",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "John Wick",
    youtube_id: "2AUmvWm5ZDQ",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430704/johnwick_thiftx.jpg",
    description: "John Wick",
    rating: 3,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Kill Bill",
    youtube_id: "7kSuas6mRpk",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430708/killbill_olpdpj.jpg",
    description: "Kill Bill",
    rating: 4,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Mad Max",
    youtube_id: "hEJnMQG9ev8",
    img: "http://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430713/madmax_raccqn.jpg",
    description: "John",
    rating: 5,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Saving Private Ryan",
    youtube_id: "zwhP5b4tD6g",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430717/savingprivate_bschaw.jpg",
    description: "Saving",
    rating: 3,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Terminator",
    youtube_id: "7QXDPzx71jQ",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430722/terminator_uz2l05.jpg",
    description: "Terminator",
    rating: 3,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Batman",
    youtube_id: "EXeTwQWrcwY",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430690/batman_jb3lx3.jpg",
    description: "Batman",
    rating: 3,
    category: "action",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Anchorman",
    youtube_id: "NJQ4qEWm9lU",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431861/anchorman_c239qq.jpg",
    description: "yiihair",
    rating: 4,
    category: "comedy",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Austin Powers",
    youtube_id: "Oze1bn4_pbk",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431864/austinpowers_zge3xx.jpg",
    description: "yiihair",
    rating: 4,
    category: "comedy",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Hang Over",
    youtube_id: "tcdUhdOlz9M",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431866/hangover_gfbtit.jpg",
    description: "yiihair",
    rating: 4,
    category: "comedy",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Step Brothers",
    youtube_id: "CewglxElBK0",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431870/stepbrothers_qefsxb.jpg",
    description: "yiihair",
    rating: 4,
    category: "comedy",
    // releaseDate: Date.now,
    comments: []
  },
  {
    name: "Super Bad",
    youtube_id: "MNpoTxeydiY",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431872/superbad_t17iwh.jpg",
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
