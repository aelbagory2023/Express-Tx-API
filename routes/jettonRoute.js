const express = require("express");
const router = express.Router();
const jettonsController = require("../controllers/jettonsController");

router.get("/jettons-balances/:address", jettonsController.getJettonsBalances);

module.exports = router;
