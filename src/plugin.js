import ForkMeControl from "./index";
const { registerPlugin } = window.geolonia || window.tilecloud || {};

const isEnabled = ({ dataset }, snakeCasedAttributeKey) => {
  const attributeKey = snakeCasedAttributeKey
    .split("-")
    .map((phrase, i) =>
      i === 0 ? phrase : phrase[0].toUpperCase() + phrase.slice(1)
    )
    .join("");
  const isDefined = attributeKey in dataset;

  const isEnabled =
    isDefined &&
    (dataset.attributeKey === "" ||
      dataset.attributeKey.toUpperCase() === "DISABLED");

  return isEnabled;
};

typeof registerPlugin === "function" &&
  registerPlugin((map, target) => {
    if (isEnabled(map, "geolonia-fork-me-disabled")) {
      const { url = "#" } = target.dataset || {};
      map.addControl(new ForkMeControl({ url }));
    }
  });
