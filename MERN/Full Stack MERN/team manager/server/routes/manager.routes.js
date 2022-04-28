const ManagerController = require("../controllers/manager.controller");

module.exports = function (app) {
  app.get("/api/manager/listPlayer", ManagerController.listOfAllPlayers);
  app.post("/api/manager/add", ManagerController.AddPlayer);
  // app.get("/api/manager/findPlayer/:id", ManagerController.findPlayer);
  app.put(
    "/api/manager/updateStatus/:id",
    ManagerController.updatePlayerStatusCode
  );
  app.delete(
    "/api/manager/deletePlayer/:id",
    ManagerController.deletePlayerbyId
  );
};
