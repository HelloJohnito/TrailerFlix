var mongoose = require ('mongoose');

var VideoSchema = new mongoose.Schema({
  name: {type: String, required: true},
  youtube_id: {type: String, required: true},
  description: {type: String, default: ""},
  rating: {type: Number, required: true},
  category: {type: String, required: true},
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Video', VideoSchema);
