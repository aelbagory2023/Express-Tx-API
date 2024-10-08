const express = require("express");
const router = express.Router();
const walletController = require("../controllers/WalletController"); // Updated to match the correct casing

// Define the routes
router.get("/wallet/history/:address", walletController.getWalletHistory);
router.get("/wallet/solana/history/:address", walletController.getSolanaWalletHistory);

module.exports = router;
