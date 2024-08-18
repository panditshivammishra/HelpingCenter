const mongoose =require("mongoose");

const cardModel= mongoose.Schema(
  {
    title: { type: String, trim: true },
    description:{type:String,trim:true}
  },
);

const Card = mongoose.model("Card", cardModel);

module.exports = Card;