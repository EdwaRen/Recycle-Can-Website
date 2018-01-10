import React, {Component} from 'react';
// import { Switch, Route } from 'react-router-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import '../css/styles.css';
import { StyleSheet, css } from 'aphrodite/no-important';

import RecycleCanLight from '../Images/Recycle_Ontario_Light.png';
import GitHubLogo from '../Images/GitHub.png';


class Footer extends Component {
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

        width: '240px',
        height: '80px',
      },
      gitHubLogoStyle: {
        width: '35px',
        height: '35px',
      },

    });

    console.log("Hi, ", this.props.page);

    return (

      <div id="fixedwidth">
          <div id="footer">
              <div id="logodiv2">
                  <a href='Index.html'>
                      <p></p>
                  </a>

                  <a href='Index.html'><img src={RecycleCanLight} className = {css(styles.logoImageStyle)} /></a>
                  <p>© Copyright 2017 Recycle Can, inc.</p>

                      <p><Link to='/terms_privacy'><span style = {{color:'#FFF'}}>Terms of Use and Privacy Policy</span></Link></p>

                  <a href='https://github.com/EdwaRen/Recycle_Can_Website'><img src={GitHubLogo} className = {css(styles.gitHubLogoStyle)} />

                  </a>

              </div>
          </div>
      </div>

    );
  }


}

export default Footer;
