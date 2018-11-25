import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {click} from 'ol/events/condition.js';

let map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([24.6559,60.2055]),
    zoom: 12
  })
});

map.on('click', function (evt) {
    var coord = map.getCoordinateFromPixel(evt.pixel);
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", "http://127.0.0.1:8000/espooregions/query?lon=24.82427329877504&lat=60.185587549999994&year=2015", false ); // false for synchronous request
    // xmlHttp.send( null );
    // return xmlHttp.responseText;
    alert(coord);
  });
