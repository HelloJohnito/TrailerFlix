import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import VideoHoverItems from './videoHoverItems';


class VideoSlider extends Component{
  constructor(props){
    super(props);
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true
    };

  }

  render(){
    return (
      <Slider {...this.settings}>
      {this.props.video.map((video, idx) => (
        <div key={idx}>
          <VideoHoverItems video={video} user={this.props.user}/>
        </div>
      ))}
    </Slider>
    );
  }
}

export default VideoSlider;
