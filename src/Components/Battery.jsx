import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';
// import GoogleMap from './GoogleMap';

import myInfo from '../extra/allLocations.js';









class Battery extends Component {
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
        <section id="headerImgBattery">
          <article>
            <div id="fixedWidth">
            </div>
          </article>

          <div class="parallax" data-velocity="-.3"></div>
          <div class="parallax" data-velocity="-.2" data-fit="525">
            <div id="fixedWidth">
              <div id="window">
                <div id="textWindow">
                  <h1> Recycle Your Batteries </h1>
                  <h1> </h1>
                </div>

              </div>
            </div>
          </div>
        </section>




        <div id="overviewE">



          <div id="fixedWidth">


            <div id="desclong3">
              <div id="header3">

                <h1><b>Enter Your Address or Postal Code To Begin</b></h1>





              </div>
            </div>
          </div>


          <p id="demo"></p>




          <div id="fixedWidthM">
            <input id="pac-input" class="controls" type="text" placeholder="Search Box"/>

            <div id="map"></div>

            {/* <GoogleMap /> */}


            {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHlW8YibL2zp7mdBSNeT81AYVaxHuOk3A&libraries=places&callback=initAutocomplete" async defer></script> */}





          </div>
        </div>
        <Footer />
      </div>

    );
  }


}

export default Battery;
