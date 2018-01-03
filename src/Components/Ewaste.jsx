import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';

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
      <div>
      <Header page = {this.props.page}/>

      <Footer />
    </div>

    );
  }


}

export default Ewaste;
