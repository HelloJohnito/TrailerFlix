import React, { Component } from 'react';


class HomePage extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="splash-container">
        <div className="splash-image">
          <div className="splash-gradient">
            <nav className="splash-nav flex">
              <h1 className="splash-logo">TrailerFlix</h1>
              <button className="splash-signup splash-button">Sign up</button>
            </nav>

            <div className="splash-outer-container-title flex-horizontal">
              <div className="splash-inner-container-title flex-vertical">
                <div className="splash-title">
                  <h3 className="">Watch All</h3>
                  <h3 className="">Movie Trailers!</h3>
                  <button>Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
