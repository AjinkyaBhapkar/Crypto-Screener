const Mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoosersSchema = new Schema(
  {
    loosers: [{}],
  },
  { timestamps: true }
);

const loosers = Mongoose.model("loosers", LoosersSchema);
module.exports = loosers;
