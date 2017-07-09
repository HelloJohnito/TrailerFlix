import React, { Component } from 'react';
import NavbarContainer from '../display/navbarContainer';
import UserProfileContainer from '../user/userProfileContainer';

class ProfilePage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <NavbarContainer history={this.props.history}/>
        <UserProfileContainer />
      </div>
    );
  }
}

export default ProfilePage;
