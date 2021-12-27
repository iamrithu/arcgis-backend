const mongoose = require("mongoose");
const schema = mongoose.Schema;

const data = new schema({
  lat: { type: Number },
  lan: { type: Number },
});

const Location = mongoose.model("Data", data);

module.exports = Location;
