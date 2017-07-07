var UserController = require('./userController');
var VideoController = require('./videoController');
var CategoryController = require('./categoryController');

// the keys are named after the resource
module.exports = {
  user: UserController,
  video: VideoController,
  category: CategoryController
};
