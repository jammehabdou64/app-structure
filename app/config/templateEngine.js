const rootPath = require("app-root-path").path;
const hbs = require("hbs");
module.exports = (app) => {
  hbs.registerPartials(`${rootPath}/views`, (err) => {});
  app.set("views", `${rootPath}/views`);
  app.set("view engine", "hbs");

  return;
};
