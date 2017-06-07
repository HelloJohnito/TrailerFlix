import React, { Component } from 'react';
import VideoItem from './videoItem';

class VideoIndex extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllVideos();
  }

  render(){

    if(!this.props.video.num){
      return <div>loading</div>;
    }

    return(
      <div>
        <div>Action</div>
          <ul>
            {this.props.video.action.map((video, idx) => (
              <VideoItem
                key={idx}
                name={video.name}
                youtubeId={video.youtube_id}
                img={video.img}
                description={video.description}
                rating={video.rating}
                />
            ))}
          </ul>

        <div>Comedy</div>

          <ul>
            {this.props.video.comedy.map((video, idx) => (
              <VideoItem
                key={idx}
                name={video.name}
                youtubeId={video.youtube_id}
                img={video.img}
                description={video.description}
                rating={video.rating}
                />
            ))}
          </ul>

        <div>Documentary</div>

          <ul>
            {this.props.video.documentary.map((video, idx) => (
              <VideoItem
                key={idx}
                name={video.name}
                youtubeId={video.youtube_id}
                img={video.img}
                description={video.description}
                rating={video.rating}
                />
            ))}
          </ul>

        <div>Family</div>
          <ul>
            {this.props.video.family.map((video, idx) => (
              <VideoItem
                key={idx}
                name={video.name}
                youtubeId={video.youtube_id}
                img={video.img}
                description={video.description}
                rating={video.rating}
                />
            ))}
          </ul>

        <div>Fantasy</div>
          <ul>
            {this.props.video.fantasy.map((video, idx) => (
              <VideoItem
                key={idx}
                name={video.name}
                youtubeId={video.youtube_id}
                img={video.img}
                description={video.description}
                rating={video.rating}
                />
            ))}
          </ul>

        <div>Horror</div>
          <ul>
            {this.props.video.horror.map((video, idx) => (
              <VideoItem
                key={idx}
                name={video.name}
                youtubeId={video.youtube_id}
                img={video.img}
                description={video.description}
                rating={video.rating}
                />
            ))}
          </ul>

        <div>Mystery</div>
          <ul>
            {this.props.video.mystery.map((video, idx) => (
              <VideoItem
                key={idx}
                name={video.name}
                youtubeId={video.youtube_id}
                img={video.img}
                description={video.description}
                rating={video.rating}
                />
            ))}
          </ul>

        <div>Romance</div>
          <ul>
            {this.props.video.romance.map((video, idx) => (
              <VideoItem
                key={idx}
                name={video.name}
                youtubeId={video.youtube_id}
                img={video.img}
                description={video.description}
                rating={video.rating}
                />
            ))}
          </ul>

      </div>
    );
  }
}

export default VideoIndex;
