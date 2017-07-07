import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SessionForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.history.push('/video');
    }
  }

  handleUpdate(field){
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
    this.props.history.push('/video');
  }

  render(){
    return(
      <div className="session-background">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label>{this.props.path}</label>

            <label> Username
              <input className="" type="text" onChange={this.handleUpdate("username")}></input>
            </label>

            <label> Password
              <input className="" type="password" onChange={this.handleUpdate("password")}></input>
            </label>

            <label>
              <input className="form-submit" type="submit" value="Submit" />
            </label>
        </form>
      </div>
    );
  }
}

export default SessionForm;
