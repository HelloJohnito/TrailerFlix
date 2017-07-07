import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../display/navbarContainer';


class HomePage extends Component{
  constructor(props){
    super(props);
  }

  navigateToVideo(e) {
    e.preventDefault();
    this.props.history.push('/video');
  }

  render(){
    return(
      <div className="splash-container">
        <div className="splash-image">
          <div className="splash-gradient">
            <NavbarContainer history={this.props.history} />

            <div className="splash-outer-container-title flex-horizontal">
              <div className="splash-inner-container-title flex-vertical">
                <div className="splash-title">
                  <h3 className="">Watch All</h3>
                  <h3 className="">Movie Trailers!</h3>
                  <button onClick={this.navigateToVideo.bind(this)}>Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
