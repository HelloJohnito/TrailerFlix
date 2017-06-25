import React, {Component} from 'react';
// import Navbar from '../display/nav';
import VideoPlayerContainer from '../video/VideoPlayerContainer';


class VideoPlayerPage extends Component {

  render(){
    return(
      <div>
        <VideoPlayerContainer videoId={this.props.match.params.videoId}/>
      </div>
    );
  }
}

export default VideoPlayerPage;
