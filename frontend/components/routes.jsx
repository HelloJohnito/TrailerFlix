import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import VideoIndex from './video/videoIndex';


class Routes extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={ VideoIndex }/>
          <Route path="/videos" component={ VideoIndex }/>
        </Switch>
      </div>
    );
  }
}

export default Routes;
