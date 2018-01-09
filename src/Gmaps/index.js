import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {camelize} from './lib/String';
import {makeCancelable} from './lib/cancelablePromise';
import invariant from 'invariant';

const mapStyles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
};

const evtNames = [
  'ready',
  'click',
  'dragend',
  'recenter',
  'bounds_changed',
  'center_changed',
  'dblclick',
  'dragstart',
  'heading_change',
  'idle',
  'maptypeid_changed',
  'mousemove',
  'mouseout',
  'mouseover',
  'projection_changed',
  'resize',
  'rightclick',
  'tilesloaded',
  'tilt_changed',
  'zoom_changed'
];

export {wrapper as GoogleApiWrapper} from './GoogleApiComponent';
export {Marker} from './components/Marker';
export {InfoWindow} from './components/InfoWindow';
export {HeatMap} from './components/HeatMap';
export {Polygon} from './components/Polygon';

export class Map extends React.Component {
  constructor(props) {
    super(props);

    invariant(
      props.hasOwnProperty('google'),
      'You must include a `google` prop.'
    );

    this.listeners = {};
    this.state = {
      currentLocation: {
        lat: this.props.initialCenter.lat,
        lng: this.props.initialCenter.lng
      }
    };
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        this.geoPromise = makeCancelable(
          new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          })
        );

        this.geoPromise.promise
          .then(pos => {
            const coords = pos.coords;
            this.setState({
              currentLocation: {
                lat: coords.latitude,
                lng: coords.longitude
              }
            });
          })
          .catch(e => e);
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (this.props.visible !== prevProps.visible) {
      this.restyleMap();
    }
    if (this.props.zoom !== prevProps.zoom) {
      this.map.setZoom(this.props.zoom);
    }
    if (this.props.center !== prevProps.center) {
      this.setState({
        currentLocation: this.props.center
      });
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  componentWillUnmount() {
    const {google} = this.props;
    if (this.geoPromise) {
      this.geoPromise.cancel();
    }
    Object.keys(this.listeners).forEach(e => {
      google.maps.event.removeListener(this.listeners[e]);
    });
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const curr = this.state.currentLocation;
      const center = new maps.LatLng(curr.lat, curr.lng);

      const mapTypeIds = this.props.google.maps.MapTypeId || {};
      const mapTypeFromProps = String(this.props.mapType).toUpperCase();

      const mapConfig = Object.assign(
        {},
        {
          mapTypeId: mapTypeIds[mapTypeFromProps],
          center: center,
          zoom: this.props.zoom,
          maxZoom: this.props.maxZoom,
          minZoom: this.props.maxZoom,
          clickableIcons: !!this.props.clickableIcons,
          disableDefaultUI: this.props.disableDefaultUI,
          zoomControl: this.props.zoomControl,
          mapTypeControl: this.props.mapTypeControl,
          scaleControl: this.props.scaleControl,
          streetViewControl: this.props.streetViewControl,
          panControl: this.props.panControl,
          rotateControl: this.props.rotateControl,
          scrollwheel: this.props.scrollwheel,
          draggable: this.props.draggable,
          keyboardShortcuts: this.props.keyboardShortcuts,
          disableDoubleClickZoom: this.props.disableDoubleClickZoom,
          noClear: this.props.noClear,
          styles: this.props.styles,
          gestureHandling: this.props.gestureHandling
        }
      );

      Object.keys(mapConfig).forEach(key => {
        // Allow to configure mapConfig with 'false'
        if (mapConfig[key] === null) {
          delete mapConfig[key];
        }
      });

      this.map = new maps.Map(node, mapConfig);

      evtNames.forEach(e => {
        this.listeners[e] = this.map.addListener(e, this.handleEvent(e));
      });
      maps.event.trigger(this.map, 'ready');
      this.forceUpdate();
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = `on${camelize(evtName)}`;

    return e => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    };
  }

  recenterMap() {
    const map = this.map;

    const {google} = this.props;

    if (!google) return;
    const maps = google.maps;

    if (map) {
      let center = this.state.currentLocation;
      if (!(center instanceof google.maps.LatLng)) {
        center = new google.maps.LatLng(center.lat, center.lng);
      }
      // map.panTo(center)
      map.setCenter(center);
      maps.event.trigger(map, 'recenter');
    }
  }

  restyleMap() {
    if (this.map) {
      const {google} = this.props;
      google.maps.event.trigger(this.map, 'resize');
    }
  }

  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map, this.props.style, {
      display: this.props.visible ? 'inherit' : 'none'
    });

    const containerStyles = Object.assign(
      {},
      mapStyles.container,
      this.props.containerStyle
    );

    return (
      <div style={containerStyles} className={this.props.className}>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  centerAroundCurrentLocation: PropTypes.bool,
  center: PropTypes.object,
  initialCenter: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  visible: PropTypes.bool,
  mapType: PropTypes.string,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  clickableIcons: PropTypes.bool,
  disableDefaultUI: PropTypes.bool,
  zoomControl: PropTypes.bool,
  mapTypeControl: PropTypes.bool,
  scaleControl: PropTypes.bool,
  streetViewControl: PropTypes.bool,
  panControl: PropTypes.bool,
  rotateControl: PropTypes.bool,
  scrollwheel: PropTypes.bool,
  draggable: PropTypes.bool,
  keyboardShortcuts: PropTypes.bool,
  disableDoubleClickZoom: PropTypes.bool,
  noClear: PropTypes.bool,
  styles: PropTypes.array,
  gestureHandling: PropTypes.string
};

evtNames.forEach(e => (Map.propTypes[camelize(e)] = PropTypes.func));

Map.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  },
  center: {},
  centerAroundCurrentLocation: false,
  style: {},
  containerStyle: {},
  visible: true
};

export default Map;
