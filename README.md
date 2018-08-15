# mbgl-fork-me-control

[![Build Status](https://travis-ci.org/tilecloud/mbgl-fork-me-control.svg?branch=master)](https://travis-ci.org/tilecloud/mbgl-fork-me-control)

This is a Mapbox GL JS plugin to add GitHub's fork-me ribbon.

https://tilecloud.github.io/mbgl-fork-me-control/

![](https://www.evernote.com/l/ABXt9aD736RLQKn6xvUKV_xf4j91lesfDn4B/image.png)

## Install

```
$ npm install @tilecloud/mbgl-fork-me-control --save
```

## How to use

```node
import TileCloudControl from '@tilecloud/mbgl-fork-me-control'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true
});
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());

map.addControl(new ForkMeConntrol({
  url: 'https://github.com/tilecloud/mbgl-fork-me-control/',
}));
```
