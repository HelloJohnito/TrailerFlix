import React, {Component} from 'react';

import axios from 'axios';

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field){
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <div className="session-background">
        <form className="session-form" onSubmit={this.handleSubmit}>

          <label> Username
            <input className="" type="text" onChange={this.handleUpdate("username")}></input>
          </label>

          <label> Password
            <input className="" type="password" onChange={this.handleUpdate("password")}></input>
          </label>

          <input className="form-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SessionForm;
