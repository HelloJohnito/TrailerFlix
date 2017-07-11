import React, { Component } from 'react';
import UserProfileItems from './userProfileItems';


class UserProfile extends Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
    // this.props.verify();
    // this.redirectIfLoggedOut();
  // }

  // redirectIfLoggedOut() {
  //   if(!this.props.user) {
  //     this.props.history.push('/');
  //   }
  // }


  render(){

    return(
      <div className="user-container">
        <header className="user-header flex">
          <div className="flex">
            <h1>Saved Trailers</h1>
          </div>
        </header>
        <section className="user-section">
          <ul className="video-detail-list">
            {this.props.user.favorite.map( (video, id) => (
              <UserProfileItems key={id} user={this.props.user} video={video}/>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}


export default UserProfile;
