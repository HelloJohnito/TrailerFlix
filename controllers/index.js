var VideoController = require('./videoController');
var CategoryController = require('./categoryController');

// the keys are named after the resource
module.exports = {
  video: VideoController,
  category: CategoryController
};
