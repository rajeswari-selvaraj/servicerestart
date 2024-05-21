const express = require("express");
const {
  getCardDetails,
  addCardDetail,
  updateCardDetail,
  deleteCardDetail,
} = require("../controllers/card_controllers");
const { getcardDetailsById } = require("../models/repositry/card.repositry");
const router = express.Router();

router.get("/card/getCardDetails", getCardDetails);
router.post("/card/addCardDetails", addCardDetail);
router.get("/card/getCardDetailsById/:cid", getcardDetailsById);
router.post("/card/updateCardDetails", updateCardDetail);
router.get("/card/deleteCardDetails/:cid", deleteCardDetail);

module.exports = router;
