import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {click} from 'ol/events/condition.js';

var map = new Map({
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
    alert(coord);
  });
