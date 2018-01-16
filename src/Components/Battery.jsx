import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';
// import GoogleMap from './GoogleMap';

import myInfo from '../extra/allLocations.js';
// import GoogleMapReact from 'google-map-react';
// import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

// import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
// import { compose } = require("recompose");

function handleClickMarker(lat, lng) {
  console.log("CLICKED");
}
const google = window.google;

const AnyReactComponent = ({ text, lat, lng }) =>
<div className = "showhim">
  <div className = "icon"></div>
  <div className = "showme">
    <p>{text}</p>
  </div> </div>
  ;
  const _ = require("lodash");

  const { compose, withProps, lifecycle } = require("recompose");
  const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    FusionTablesLayer,
  } = require("react-google-maps");
  const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

  const MapWithAFusionTablesLayer = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBipGTaEpZxIOqSRoYJakq64x9BQNjZwJs&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
  //    lifecycle({
  //   // componentWillMount() {
  //   //   const refs = {}
  //   //
  //   //   this.setState({
  //   //     bounds: null,
  //   //     center: {
  //   //       // defaultCenter={{ lat: 45.4235937, lng: -75.7031177 }}
  //   //
  //   //       lat: 45.4235937, lng: -75.7031177
  //   //     },
  //   //     markers: [],
  //   //     onMapMounted: ref => {
  //   //       refs.map = ref;
  //   //     },
  //   //     onBoundsChanged: () => {
  //   //       this.setState({
  //   //         bounds: refs.map.getBounds(),
  //   //         center: refs.map.getCenter(),
  //   //       })
  //   //     },
  //   //     onSearchBoxMounted: ref => {
  //   //       refs.searchBox = ref;
  //   //     },
  //   //     onPlacesChanged: () => {
  //   //       const places = refs.searchBox.getPlaces();
  //   //       const bounds = new google.maps.LatLngBounds();
  //   //
  //   //       places.forEach(place => {
  //   //         if (place.geometry.viewport) {
  //   //           bounds.union(place.geometry.viewport)
  //   //         } else {
  //   //           bounds.extend(place.geometry.location)
  //   //         }
  //   //       });
  //   //       const nextMarkers = places.map(place => ({
  //   //         position: place.geometry.location,
  //   //       }));
  //   //       const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
  //   //
  //   //       this.setState({
  //   //         center: nextCenter,
  //   //         markers: nextMarkers,
  //   //       });
  //   //       // refs.map.fitBounds(bounds);
  //   //     },
  //   //   })
  //   // },
  // }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
    // ref={props.onMapMounted}
    defaultZoom={11}
    center={props.center}
    // onBoundsChanged={props.onBoundsChanged}
  >
    {/* <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 45.4235937, lng: -75.7031177 }}
      > */}
        {/* <SearchBox
          ref={props.onSearchBoxMounted}
          bounds={props.bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={props.onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Search ..."
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                marginTop: `27px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
              }}
            />
          </SearchBox> */}

          {/* Paint: 1R3jmt90pLFytzfWEYB2myzsBhkrvwh8JfPn4eImG */}
          {/* Ewaste: 1ySrhzEk6ubvy7EQZeG7zWEnP4UUNDbhcFviGiHBB */}
          <FusionTablesLayer
            url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
            options={{
              query: {
                select: `name`,
                from: `1Lz_0UDytj1GjkeYJog3cXnecoT4Q6ifHxvQvI62P`
              }
            }}
          />
        </GoogleMap>
      );

      class Battery extends Component {
        constructor() {
          super();
          this.state = {
            text: 0,
            lat: 45.4235937, lng: -75.703123,
          };
          // this.deleteRow(lat) = this.deleteRow(lat).bind(this);
        }

        // 45.4150797,-75.7502815
        static defaultProps = {
          center: {lat: 45.4235937, lng: -75.703123},
          zoom: 11
        };

        renderMarker(locations) {
          console.log(locations);
          return (
            <AnyReactComponent
              // style = {{zIndex:'0'}}
              lat={locations.latitude}
              lng={locations.longitude}
              text={locations.name}
            />
          )

        }

        numberFilesToRender() {
          //Renders everything in Files, such as Readme, About FinderMe etc
          //combinedRenders array is used so only one return statement is necessary
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

          var combinedRenders =[];
          for (var i = 0; i < 10; i++) {
            combinedRenders.push(this.renderMarker(locFields[i]));
          }
          return (
            <div></div>
            // <GoogleMapReact
            //   defaultCenter={this.props.center}
            //   defaultZoom={this.props.zoom} >
            //   {combinedRenders}
            // </GoogleMapReact>
          );


        }



        render() {
          const mainDivStyle = {
            width: '800px',
            backgroundColor: 'white',


          }


          // console.log(locFields);

          // console.log("logging", counter.battery[0][1]);
          // this.state.text = locations.battery[0][1];

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

      export default Battery;
