import React, {Component} from 'react';

import { Router, Route, hashHistory, IndexRoute, IndexLink } from 'react-router';

// import { Switch, Route } from 'react-router-dom';


import Home from './Home';
import Ewaste from './Ewaste';
import Battery from './Battery';
import Paint from './Paint';
import About from './About';
import Terms from './Terms';

// App.jsx is not 'actually necessary' but it follows accepted react architecture by always having an App.jsx main renderer
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };


  }

  render() {
    return(


        <Router history={hashHistory} >
          <IndexRoute component={Home} />


                  {/* <Route exact path = "/" component={() => (<Home page={0} />)} />
                  <Route exact path = "/Ewaste" component={() => (<Ewaste page={1} />)} />
                  <Route path = "/Battery" component={() => (<Battery page={2} />)}/> */}
                  {/* <Route path = "/Paint" component={() => (<Paint page={3} />)} />
                  <Route path = "/About" component={() => (<About page={4} />)} />
                  <Route path = "/Terms" component={() => (<Ewaste page={5} />)} /> */}
          <Route path = "/" component={Home}/>
          <Route path = "/battery" component={Battery} />
          <Route path = "/ewaste" component={Ewaste} />
          <Route path = "/paint" component={Paint} />
          <Route path = "/about" component={About} />
          <Route path = "/terms_privacy" component={Terms} />




        </Router>
    );
  }
}


export default App
