"use strict"

class ForkMeConntrol {
  constructor(options) {
    this.url = options.url
  }

  onAdd() {
    this.container = document.createElement('div')
    this.container.className = 'mapboxgl-ctrl'

    const img = 'https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png'
    const style = 'position: absolute; top: -149px; left: 0; border: 0;'

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
