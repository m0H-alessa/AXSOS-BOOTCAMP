const { Manager } = require("../models/manager.model");

module.exports.listOfAllPlayers = (request, response) => {
  Manager.find({})
    .then((res) => response.json(res))
    .catch((err) => response.json(err));
};
// The CRUD ORP.

module.exports.AddPlayer = (request, response) => {
  const { playerName, playerPostions, status } = request.body;

  console.log("MOUNTED");

  Manager.create({
    playerName,
    playerPostions,
    status,
  })
    .then((res) => response.json(res))
    .catch((err) => response.json(err));
};

module.exports.findPlayer = (request, response) => {
  const { id } = request.params;
  Product.find({ _id: id })
    .then((res) => response.json(res))
    .catch((err) => response.status(400).json(err));
};

module.exports.updatePlayerStatusCode = (request, response) => {
  Manager.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((err) => response.json(err));
};

module.exports.deletePlayerbyId = (request, response) => {
  Manager.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
