var t=function(t){this.url=t.url};t.prototype.onAdd=function(){return this.container=document.createElement("div"),this.container.className="mapboxgl-ctrl",this.container.innerHTML='<a><img style="position: absolute; top: -149px; left: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png" alt="Fork me on GitHub"></a>',this.container.querySelector("a").href=this.url,document.querySelector(".mapboxgl-ctrl-top-left").style.top="149px",this.container},t.prototype.onRemove=function(){this.container.parentNode.removeChild(this.container)},t.prototype.getDefaultPosition=function(){return"top-left"},module.exports=t;
//# sourceMappingURL=mbgl-fork-me-control.js.map
