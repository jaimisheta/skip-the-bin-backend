// Author : Lokansh Gupta
const mongoose = require("mongoose");

const querySchema = {
  _id: mongoose.Schema.Types.ObjectId,
  customerId: { type: String },
  points: { type: String },
};

module.exports = mongoose.model("RewardPoint", querySchema);
