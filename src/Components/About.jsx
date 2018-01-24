import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';
import Logo from '../Images/Recycle_Ontario.png'

class About extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0,0);

  }

  render() {
    const mainDivStyle = {
      width: '800px',
      backgroundColor: 'white',


    }

    return (
      <div>
        <Header page = {4}/>
        <div id="overviewAbout" style = {{paddingTop: '100px'}}>
          <div id="headerFill2">
          </div>

          <div id="fixedWidth">
            <div id="desclong4">
              <div id="header32">
                <h1 style = {{paddingTop:'25px'}}>Who Are We?</h1>
              </div>
            </div>
            <div id="leftFill">

            </div>

            <div id="logodivBig">
              <a style = {{textDecoration:'none'}} href="index.html"> <img src={Logo} alt="Image Not Found" width="100%" height="100%" /> </a>

            </div>
            <div id="rightFill">
            </div>

          </div>


          <div id="fixedWidth">

            <div id="desclong5" style = {{textAlign:'left', }}>
              <div id="header33" >
                <h1 style = {{textAlign:'left', }}><b>Only 30% of Household Hazardous Waste is Properly Disposed Of</b>
              </h1>
              <p style = {{textAlign:'left',paddingLeft:'60px' , paddingRight:'60px'}}>Recycle Canada. is a not-for-profit, stewardship organization committed to the safe recycling, of consumer electronic waste, batteries, and paint across Canada. The organization is student lead and works to protect and preserve the environment by providing an easily accessible list of recycling programs for many potentially hazardous materials at no-cost to consumers across Canada. With the approved battery stewardship program in provinces such as British Columbia, Manitoba, and Quebec, Recycle Canada aims to help fulfill the obligated stewards’ commitment to ensure the proper end-of-life recycling process for batteries. As new recycling areas are constantly opening up, we strive to keep our list up to date with new monthly additions to our website.
              </p>
            </div>
          </div>
        </div>


        <div id="fixedWidth">

          <div id="Drawing2Loc">
            <div id="leftFill">

            </div>

          </div>


        </div>


        <div id="fixedWidth">

          <div id="desclong7">
            <div id="header32">
              <h1><b>Contact Us</b>  </h1><p style = {{marginTop:'-15px'}}>Email: info@recyclecan.ca<br/>Phone: (613)-325-6257 </p>

            </div>
          </div>
        </div>



        <div id="fixedWidth">

          <div id="leftFill2">

          </div>

          <div id="desclong7">
            <div id="header32">

              <p style = {{paddingTop:'30px'}}><br /> Follow us on <a href='https://github.com/EdwaRen/Recycle_Can_Website'>GitHub!</a><br />Site created by Edward Ren.</p>
            </div>
          </div>

        </div>



    <Footer />
  </div>
</div>


);
}


}

export default About;
