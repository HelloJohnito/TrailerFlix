# TrailerFlix

[Live Link](https://trailerflix.herokuapp.com/)

TrailerFlix is a full stack web application designed for users to watch their favorite movie trailers. TrailerFlix incorporates React and Redux framework for the frontend flow and utilizes Node, Express, and MongoDB for the backend.

TrailerFlix incorporates the MVC principal and utilizes Axios to make API calls from the frontend to the backend. From a user action, an api call is sent to the router of express and is directed to its respective controller. A function will then execute and extract the necessary data from the data base and send it back to the frontend where it is displayed to the user.

## Features and Implementations

### Authentication

On TrailerFlix, users are not required to log in. Anyone can browse and watch any movie trailers as they like. Users who do decide to create an account and log in are allowed to save any movie trailers to their profile page and watch them in the future.

For user authentication, I incorporated the famous PassportJS. PassportJS is an authentication middleware for Node.js that integrates a secure process that salts and hashes passwords before storing them into the database.   

### MongoDB

TrailerFlix utilizes MongoDB, a noSQL/non-relational database. To fully take advantage of the its features, I created a model called 'Category' and stored all the videos separated by category for efficient retrieval of data from the database.

Sample code below:

```javascript
videoData.forEach(function(video){
  // create video
  Video.create(video, function(err, createdVideo){
    if(err){
      console.log(err);
      return;
    }
    // find the Category model and insert the video by category.
    Category.findOne({num: 1}, function(err1, category){
      if(err1){
        console.log("error when pushing video into category");
        return;
      }
    category[createdVideo.category].push(createdVideo);
      category.save();
    });
    console.log("Video was created");
   });
});
```

### Connecting to Youtube

TrailerFlix integrates with the YouTube iFrame API to fetch and render youtube clips. The youtube id is pulled from the data base and set to the url.

```javascript
render(){
  return(
    <div className='video-player-container'>
      <iframe
        className='embedded-player'
        src={`https://www.youtube.com/embed/${this.props.video.youtube_id}?autoplay=1&modestbranding=1&showinfo=0&iv_load_policy=3`}
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
  );
}
```

### Save Favorite Movie Trailers

Users are able to save their favorite movie trailers and view them in their profile page. When the user clicks 'add to favorite', an action is dispatched and the data is saved onto mongoDB under the User model. 

<p align="center">
    <img src="https://media.giphy.com/media/zRRtPaFEoefHa/giphy.gif" alt="Landing Page" />
</p>
