import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';


const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,
} = require("react-google-maps");

const MapWithAFusionTablesLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 45.4235937, lng: -75.7031177 }}
    >

      {/* Paint: 1R3jmt90pLFytzfWEYB2myzsBhkrvwh8JfPn4eImG */}
      {/* Ewaste: 1ySrhzEk6ubvy7EQZeG7zWEnP4UUNDbhcFviGiHBB */}
      <FusionTablesLayer
        url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
        options={{
          query: {
            select: `name`,
            from: `1R3jmt90pLFytzfWEYB2myzsBhkrvwh8JfPn4eImG`
          }
        }}
      />
    </GoogleMap>
  );


class Paint extends Component {
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
        <Header page = {3}/>
        <section id="headerImgPaint">
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

        <div id="overviewE" style = {{height:'900px'}}>
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

            {/* 45.248786,-76.3607093 */}

            {/* {this.numberFilesToRender()} */}
            <MapWithAFusionTablesLayer />
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHlW8YibL2zp7mdBSNeT81AYVaxHuOk3A&libraries=places&callback=initAutocomplete" async defer></script> */}


          </div>

          <Footer />
        </div>

      </div>
    );
  }


}

export default Paint;
