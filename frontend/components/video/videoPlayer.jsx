import React, {Component} from 'react';


class VideoPlayerPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchVideoById();
  }

  render(){
    if(!this.props.video.youtube_id){
      return <div>loading...</div>;
    }
    
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
}


export default VideoPlayerPage;

// <div className='video-player-container'>
//   <iframe
//     className='embedded-player'
//     src={`https://www.youtube.com/embed/${this.props.video}?autoplay=1&modestbranding=1&showinfo=0&iv_load_policy=3`}
//     frameBorder="0"
//     allowFullScreen>
//   </iframe>
// </div>
