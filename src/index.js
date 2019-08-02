"use strict"

class ForkMeConntrol {
  constructor(options) {
    this.url = options.url
  }

  onAdd() {
    this.container = document.createElement('div')
    this.container.className = 'mapboxgl-ctrl'

    const img = 'https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png'

    const styles = {
      default: 'position: absolute; top: -159px; left: -10px; border: 0;',
      '<1.0.0': 'position: absolute; top: -149px; left: 0; border: 0;'
    }

    let style = styles.default

    if (window.mapboxgl) {
      const major = parseInt(window.mapboxgl.version.split('.')[0])
      if (!isNaN(major) && major < 1) {
        style = styles['<1.0.0']
      }
    }

    this.container.innerHTML = `<a><img style="${style}" src="${img}" alt="Fork me on GitHub"></a>`
    this.container.querySelector('a').href = this.url

    document.querySelector('.mapboxgl-ctrl-top-left').style.top = '149px'

    return this.container;
  }

  onRemove() {
    this.container.parentNode.removeChild(this.container)
  }

  getDefaultPosition() {
    return 'top-left'
  }
}

export default ForkMeConntrol;
