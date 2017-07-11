import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class VideoDetail extends Component {
  constructor(props){
    super(props);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  addToFavorite(e){
    e.preventDefault();

    if(this.props.user){
      let self = this;
      let request = {user: this.props.user, video: this.props.video};
      setTimeout(function(){
        self.props.addFavorite(request);
      });

      setTimeout(function(){
        self.props.history.push("/user");
      });
    } else {
      console.log("You need to log in first");
    }
  }

  render(){

    let addFavButton;
    if(this.props.formType === "videoIndex" && this.props.user){
      addFavButton = <button onClick={this.addToFavorite}>Add to Favorite</button>;
    }

    return(
      <div className="video-detail-container flex">
        <div className="video-detail-left">
          <img src={this.props.video.img} />
        </div>
        <div className="video-detail-right">
          <h1>{this.props.video.name}</h1>
          <div className="video-detail-right-description-container">
            <p>{this.props.video.description}</p>
          </div>
          <div className="">
            <Link to={`/video/${this.props.video._id}`} className="">Play Trailer</Link>
            {addFavButton}
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(VideoDetail);
