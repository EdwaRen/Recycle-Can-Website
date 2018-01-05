import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';
// import GoogleMap from './GoogleMap';

import myInfo from '../extra/allLocations.js';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

// import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
// import { compose } = require("recompose");









class Battery extends Component {
  constructor() {
    super();
    this.state = {
      text: 0,

    };
    // this.deleteRow(lat) = this.deleteRow(lat).bind(this);

  }


  deleteRow(lat) {
    console.log("DELETE ROW DETECTED");

    console.log(lat);
  }


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
    }
    console.log(locFields);

    // console.log("logging", counter.battery[0][1]);
    this.state.text = locations.battery[0][1];

    // const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
    const { compose, withProps, withStateHandlers } = require("recompose");
    // const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
    const google = window.google;




    const MyMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 45.4235937, lng: -75.703123 },
        // 45.4235937,-75.703123
      }),
      withStateHandlers(() => ({
        isOpen: false,
      }), {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen,
        })
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 45.4235937, lng: -75.703123 }}
        >
          {props.markers.map((marker)=> {

            function handleClick(e) {
              // this.deleteRow;
              // (e) => this.deleteRow();
              console.log("Click detected");
              // props.onToggleOpen();
            }

            return (
              <Marker
                position={{lat: marker.latitude, lng: marker.longitude}}
                onClick={() => this.deleteRow("id")}
                // onClick={() => {this.deleteRow("id"); props.onToggleOpen }}
                >
                  {props.isOpen && <InfoBox onCloseClick={props.onToggleOpen} options={{ closeBoxURL: ``, enableEventPropagation: true }}
                    >
                      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                          {this.state.text}
                        </div>
                      </div>
                    </InfoBox>}
                  </Marker>
                )
              })}
            </GoogleMap>
          );

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

                <div id="fixedWidthM" style = {{height:"1000px"}}>
                  <input id="pac-input" class="controls" type="text" placeholder="Search Box"/>

                  <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `400px`, width: `100%` }} />}
                    containerElement={<div style={{ height: `400px`, width: `100%` }} />}
                    mapElement={<div style={{ height: `400px`, width: `100%` }} />}
                    markers = {locFields}
                  />

                  {/* <GoogleMap /> */}


                  {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHlW8YibL2zp7mdBSNeT81AYVaxHuOk3A&libraries=places&callback=initAutocomplete" async defer></script> */}





                </div>
                <Footer />

              </div>
            </div>

          );
        }


      }

      export default Battery;
