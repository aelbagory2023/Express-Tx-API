const express = require("express");
const router = express.Router();
const lendBorrowController = require("../controllers/lendBorrowController");

router.get("/lendborrow/getuserpositions", lendBorrowController.getUserPositions);

module.exports = router;
