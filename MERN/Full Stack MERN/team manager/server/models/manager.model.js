const mongoose = require("mongoose");
const ManagerSchema = new mongoose.Schema(
  {
    playerName: {
      type: String,
      minlength: [
          true,
          "Player Name must be at least 2 characters"
      ]
  },
    playerPostions: { type: String,
      required: [
          true,
          "Player Postion is required"
      ] },
      
    status: { type: Number },
  },
  { timestamps: true }
);
module.exports.Manager = mongoose.model("Manager", ManagerSchema);
