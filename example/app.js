import TileCloudControl from '@tilecloud/mbgl-tilecloud-control'
import ForkMeConntrol from '../src/app'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new TileCloudControl());

map.addControl(new ForkMeConntrol({
  url: 'https://github.com/tilecloud/mbgl-fork-me-control/',
}));
