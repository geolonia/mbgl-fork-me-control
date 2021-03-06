# mbgl-fork-me-control

[![Build Status](https://travis-ci.org/tilecloud/mbgl-fork-me-control.svg?branch=master)](https://travis-ci.org/tilecloud/mbgl-fork-me-control)
[![npm version](https://badge.fury.io/js/%40geolonia%2Fmbgl-fork-me-control.svg)](https://badge.fury.io/js/%40geolonia%2Fmbgl-fork-me-control)

This is a Mapbox GL JS plugin to add GitHub's fork-me ribbon.

https://tilecloud.github.io/mbgl-fork-me-control/

![](https://www.evernote.com/l/ABXkH-a_3vdIm4yDn-OOgfXUjmsJSObhe6IB/image.png)

## Install

```
$ npm install @geolonia/mbgl-fork-me-control --save
```

## How to use

```node
import ForkMeConntrol from '@geolonia/mbgl-fork-me-control'

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
