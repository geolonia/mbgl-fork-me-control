const chalk = require("chalk");
const LABEL = chalk.yellow.bold.bgBlack("[WARN]");
const meta = require("../package.json");

const main = () => {
  const [, org, name] = /^@(.+)\/(.+)/.exec(meta.name) || [];

  if (org !== "tilecloud") {
    return;
  } else {
    const oldName = chalk.yellow.bold.bgBlack(`@${org}/${name}`);
    const newName = chalk.yellow.bold.bgBlack(`@geolonia/${name}`);

    const lines = [
      `The package ${oldName} has been deprecated and no longer will be updated.`,
      `Please use ${newName} instead.`
    ];

    const message = lines.map(line => `${LABEL} ${line}`).join("\n");

    process.stdout.write(`${message}\n`);
  }
};

main();
