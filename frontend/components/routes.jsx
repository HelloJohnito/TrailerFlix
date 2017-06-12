import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HomePage from './page/homepage';
import IndexPage from './page/indexpage';



class Routes extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route path="/video" component={ IndexPage }/>
        </Switch>
      </div>
    );
  }
}

export default Routes;
