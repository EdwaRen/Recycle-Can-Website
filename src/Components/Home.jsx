import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';

class About extends Component {
  constructor() {
    super();
  }

  render() {
    const mainDivStyle = {
      width: '800px',
      backgroundColor: 'white',


    }
    return (
      <Header />

    );
  }


}

export default About;
