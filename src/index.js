"use strict"

class ForkMeConntrol {
  constructor(options) {
    this.url = options.url
  }

  onAdd() {
    this.container = document.createElement('div')
    this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group'

    const img = 'https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png'

    this.container.innerHTML = `<a href="${this.url}"><img src="${img}" alt="Fork me on GitHub"></a>`
    this.container.setAttribute('style', `
      margin: 0;
      background: none;
      border: none;
      border-radius: 0;
      box-shadow: none;
    `)

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
