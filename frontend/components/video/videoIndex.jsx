import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true
    };

    if(!this.props.video.num){
      return <div>loading</div>;
    }

    return(
      <div>
        <div className="video-category-container">
          <div className="video-category-title">Action</div>
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <Link to="" className="video-playbutton-link">
                <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
              </Link>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Comedy</div>
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <Link to="" className="video-playbutton-link">
                <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
              </Link>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Documentary</div>
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <Link to="" className="video-playbutton-link">
                <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
              </Link>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Family</div>
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <Link to="" className="video-playbutton-link">
                <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
              </Link>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Fantasy</div>
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <Link to="" className="video-playbutton-link">
                <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
              </Link>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Horror</div>
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <Link to="" className="video-playbutton-link">
                <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
              </Link>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Mystery</div>
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <Link to="" className="video-playbutton-link">
                <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
              </Link>
              <img className="video-img" src={video.img} />
            </div>
          ))}
          </Slider>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Romance</div>
          <Slider {...settings}>
          {this.props.video.action.map((video, idx) => (
            <div key={idx} className="video-thumbnail">
              <div className="video-title">{video.name}</div>
              <Link to="" className="video-playbutton-link">
                <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
              </Link>
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
