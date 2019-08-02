import ForkMeControl from "./index";

const { registerPlugin } = window.geolonia || window.tilecloud || {};
typeof registerPlugin === "function" &&
  registerPlugin((map, target) => {
    const { url = "#!" } = target.dataset || {};
    map.addControl(new ForkMeControl({ url }));
  });
