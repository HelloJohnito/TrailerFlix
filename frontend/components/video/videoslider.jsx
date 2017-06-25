import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


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
        <div key={idx} className="video-thumbnail">
          <div className="video-title">{video.name}</div>
          <Link to={`/video/${video._id}`} className="video-playbutton-link">
            <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
          </Link>
          <img className="video-img" src={video.img} />
        </div>
      ))}
      </Slider>
    );
  }
}

export default VideoSlider;
