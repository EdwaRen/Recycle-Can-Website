import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../css/styles.css';
import { StyleSheet, css } from 'aphrodite/no-important';

import RecycleCanLogo from '../Images/Recycle_Ontario.png';


class Header extends Component {
  constructor() {
    super();
  }

  render() {

    const styles = StyleSheet.create({

      logoLinkStyle: {
        color:'white',
        textDecoration:'none',
      },

      logoImageStyle: {

        width: '324px',
        height: '108px',
        position: 'fixed',
      },

    });

    return (

      <div id="header">

        <div id="fixedWidth">

          <div id="Logoback">
          </div>

          <div id="logodiv">
            <a className={css(styles.logoLinkStyle)} href="index.html"> <img src = {RecycleCanLogo} alt="Image Not Found" className={css(styles.logoImageStyle)}/> </a>

          </div>

          <div id="cssmenu">
            <ul>
              <li className="active"><Link to='/'><span>Home</span></Link></li>
              <li><Link to='/Ewaste'><span>Ewaste</span></Link></li>
              <li><Link to='/Battery'><span>Batteries</span></Link></li>
              <li><Link to='/Paint'><span>Paint</span></Link></li>
              <li><Link to='/About'><span>About</span></Link></li>
            </ul>
          </div>

        </div>

      </div>

    );
  }


}

export default Header;
