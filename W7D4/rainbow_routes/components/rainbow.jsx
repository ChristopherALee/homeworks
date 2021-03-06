import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        {/* Your links should go here */}
        <NavLink exact to="/red" >Red only</NavLink>
        <NavLink exact to="/red/orange" >Orange only</NavLink>
        <NavLink exact to="/red/yellow" >Yellow only</NavLink>
        <NavLink exact to="/green" >Green only</NavLink>
        <NavLink exact to="/blue" >Blue only</NavLink>
        <NavLink exact to="/blue/indigo" >Indigo only</NavLink>
        <NavLink exact to="/violet" >Violet only</NavLink>

        <div id="rainbow">
          {/* Your routes should go here */}
          <Route path="/red" component={Red} />
          <Route path="/green" component={Green} />
          <Route path="/blue" component={Blue} />
          <Route path="/violet" component={Violet} />
        </div>
      </div>
    );
  }
}

export default Rainbow;
