import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';

class Ewaste extends Component {
  constructor() {
    super();
  }

  render() {
    const mainDivStyle = {
      width: '800px',
      backgroundColor: 'white',


    }

    return (
      <Header page = {this.props.page}/>

    );
  }


}

export default Ewaste;
