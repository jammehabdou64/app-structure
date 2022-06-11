const { Route, getController, Auth } = require("gambtech-lib");

/**
 *
 * Web Routes
 *
 */

Route.get("/", (req, res) => res.render("welcome"));
