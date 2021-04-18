import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'http://localhost:8080/geoserver/india/wms?service=WMS&version=1.1.0&request=GetMap&layers=india%3Agis_osm_natural_free_1&bbox=68.9625617%2C3.9905033%2C97.4765781%2C35.663734&width=691&height=768&srs=EPSG%3A4326&styles=&format=image%2Fjpeg'
      })
    })
  ],
  view: new View({
    center: [10, 10],
    zoom: 2
  })
});