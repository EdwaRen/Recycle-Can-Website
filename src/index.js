import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';







import App from './Components/App';




ReactDOM.render((
  //
  // <HashRouter  onUpdate={() => window.scrollTo(0, 0)}>
  //   <Switch onUpdate={() => window.scrollTo(0, 0)}>
  //     <Route exact path = "/" component = {Index} />
  //     <Route exact path = "/media" component = {Media} />
  //     <Route exact path = "/sponsors" component = {Sponsors} />
  //     <Route exact path = "/team" component = {Team} />
  //     <Route exact path = "/contact" component = {Contact} />
  //     <Route exact path = "/apply" component = {Apply} />
  //     <Route exact path = "/errorfilesize" component = {ErrorFileSize} />
  //     <Route exact path = "/errorfieldmissing" component = {ErrorFieldMissing} />
  //     <Route exact path = "/errorunknown" component = {ErrorUnknown} />
  //   </Switch>
  // </HashRouter>

    <App />
  // </Router>
), document.getElementById('root'));
