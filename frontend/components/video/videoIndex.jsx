import React, { Component } from 'react';
import Slider from 'react-slick';

class VideoIndex extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllVideos();
  }

  render(){

    var settings = {
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true
    };

    if(!this.props.video.num){
      return <div>loading</div>;
    }

    return(
      <div>
        <div>Action</div>
        <div className="video-category-container">
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <div className="video-playbutton">playbutton</div>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div>Comedy</div>
        <div className="video-category-container">
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <div className="video-playbutton">playbutton</div>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div>Documentary</div>
        <div className="video-category-container">
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <div className="video-playbutton">playbutton</div>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div>Family</div>
        <div className="video-category-container">
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <div className="video-playbutton">playbutton</div>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div>Fantasy</div>
        <div className="video-category-container">
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <div className="video-playbutton">playbutton</div>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div>Horror</div>
        <div className="video-category-container">
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <div className="video-playbutton">playbutton</div>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div>Mystery</div>
        <div className="video-category-container">
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <div className="video-playbutton">playbutton</div>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div>Romance</div>
        <div className="video-category-container">
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <div className="video-playbutton">playbutton</div>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

      </div>
    );
  }
}

export default VideoIndex;
