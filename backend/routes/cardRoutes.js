const express =require("express");
const {addCard,allCards,getCardByTitle,searching}=require("../controllers/cardController")
const cardRouter = express.Router();

cardRouter.route('/').post(addCard);
cardRouter.route('/').get(allCards);
cardRouter.route('/search').get(searching);
cardRouter.route('/:title').get(getCardByTitle);
module.exports = cardRouter;