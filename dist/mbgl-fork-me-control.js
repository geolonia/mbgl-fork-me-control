var t=function(t){this.url=t.url};t.prototype.onAdd=function(){this.container=document.createElement("div"),this.container.className="mapboxgl-ctrl";var t="position: absolute; top: -159px; left: -10px; border: 0;";if(window.mapboxgl){var o=parseInt(window.mapboxgl.version.split(".")[0]);!isNaN(o)&&o<1&&(t="position: absolute; top: -149px; left: 0; border: 0;")}return this.container.innerHTML='<a><img style="'+t+'" src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png" alt="Fork me on GitHub"></a>',this.container.querySelector("a").href=this.url,document.querySelector(".mapboxgl-ctrl-top-left").style.top="149px",this.container},t.prototype.onRemove=function(){this.container.parentNode.removeChild(this.container)},t.prototype.getDefaultPosition=function(){return"top-left"},module.exports=t;
//# sourceMappingURL=mbgl-fork-me-control.js.map
