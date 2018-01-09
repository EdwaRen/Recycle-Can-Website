import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';
// import GoogleMap from './GoogleMap';

import myInfo from '../extra/allLocations.js';
import GoogleMapReact from 'google-map-react';
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

// import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
// import { compose } = require("recompose");

function handleClickMarker(lat, lng) {
  console.log("CLICKED");
}

const AnyReactComponent = ({ text, lat, lng }) =>
 <div className = "showhim">
   <div className = "icon"></div>
   <div className = "showme">
    <p>{text}</p>
 </div> </div>
 ;

class Battery extends Component {
  constructor() {
    super();
    this.state = {
      text: 0,
      lat: 45.4235937, lng: -75.703123,
    };
    // this.deleteRow(lat) = this.deleteRow(lat).bind(this);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //
  //   if (this.state.latitude == nextState.latitude) {
  //     return false;
  //   }
  //   return false;
  // }



  deleteRow(lat, lng) {
    console.log("DELETE ROW DETECTED");
    this.setState({
      latitude: lat,
      lat: lat,
      lng: lng,
      selectedPlace:'hi',


      // update: lat+1,
    })
    // console.log(lat);
  }


  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };


  render() {
    const mainDivStyle = {
      width: '800px',
      backgroundColor: 'white',


    }

    var locations = require('../extra/allLocations.js');
    var locFields = [];
    for (var i = 0; i < (locations.battery).length; i++) {
      locFields.push([]);
    }
    for (var i = 0; i < (locations.battery).length; i++) {
      locFields[i]["latitude"] = locations.battery[i][1];
      locFields[i]["longitude"] = locations.battery[i][2];
      locFields[i]["name"] = locations.battery[i][0];
      locFields[i]["phone"] = locations.battery[i][3];
      locFields[i]["postal"] = locations.battery[i][4];



    }
    // console.log(locFields);

    // console.log("logging", counter.battery[0][1]);
    this.state.text = locations.battery[0][1];

    // const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
    const { compose, withProps, withStateHandlers } = require("recompose");
    // const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
    const google = window.google;



    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div>
        <Header page = {2}/>
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

          <div id="fixedWidthM" style = {{width:"100%"}}>
            <input id="pac-input" class="controls" type="text" placeholder="Search Box"/>
            <div style = {{backgroundColor:"#333"}} />


            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom} >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
              />
              <AnyReactComponent
                lat={58.955413}
                lng={29.337844}
                text={'Kreyser Avrora2'}
              />
            </GoogleMapReact>


            {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHlW8YibL2zp7mdBSNeT81AYVaxHuOk3A&libraries=places&callback=initAutocomplete" async defer></script> */}





          </div>
          <Footer />

        </div>
      </div>

    );
  }


}

export default Battery;
