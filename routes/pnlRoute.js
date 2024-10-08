const express = require("express");
const router = express.Router();
const pnlController = require("../controllers/pnlController");

router.get("/address-pnl", pnlController.getAddressPnl);
router.get("/token-pnl/:wallet", pnlController.getTokenPnl);

module.exports = router;
