import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';


import Home from './Home';
import Ewaste from './Ewaste';
import Battery from './Battery';
import Paint from './Paint';
import About from './About';
import Terms from './Terms';

// App.jsx is not 'actually necessary' but it follows accepted react architecture by always having an App.jsx main renderer
const App = () => (

    <main>
        <Route exact path = "/" component = {Home} />
        <Route path = "/Ewaste" component = {Ewaste} />
        <Route path = "/Battery" component = {Battery} />
        <Route path = "/Paint" component = {Paint} />
        <Route path = "/About" component = {About} />
        <Route path = "/Terms" component = {Terms} />

    </main>
)

export default App
