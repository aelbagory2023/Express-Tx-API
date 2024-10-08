const express = require("express");
const router = express.Router();
const tonRatesController = require("../controllers/tonRatesController");

router.get("/ton-rates", tonRatesController.getTonRates);

module.exports = router;
