const Mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GainersSchema = new Schema(
  {
    gainers: [{}],
  },
  { timestamps: true }
);

const gainers = Mongoose.model("gainers", GainersSchema);
module.exports = gainers;
