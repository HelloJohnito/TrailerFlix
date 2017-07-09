import React, {Component} from 'react';

class UserProfileItems extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <li className="video-detail-info">
        <div>
          <h1>{this.props.videoName}</h1>
          <img src={this.props.videoImage} />
        </div>
      </li>
    );
  }
}

export default UserProfileItems;
