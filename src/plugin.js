import ForkMeControl from "./index";

const { registerPlugin } = window.geolonia || window.tilecloud || {};
typeof registerPlugin === "function" &&
  registerPlugin((map, target) => {
    const { url = "#", geoloniaForkMeDisabled } = target.dataset || {};
    geoloniaForkMeDisabled || map.addControl(new ForkMeControl({ url }));
  });

// NOTE: plugin interfaces
// - Use `window.geolonia.registerPlugin(Plugin)`
// Plugin: (map: Mapbox.map, target: HTMLElement) => void

// - (recommended) Plugin should be disabled with `data-${namespace}-${plugin-name}-disabled="on"` attriute.
