export const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Transaction history API for Shogun Telegram Bot",
    version: "1.0.0",
    description:
      "Example Solana Address: 5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
      "Example Ethereum Address: 0x28C6c06298d514Db089934071355E5743bf21d60",
      "Example Base Address: 0x4200000000000000000000000000000000000006",
      "Example Arbitrum Address: 0x489ee077994B6658eAfA855C308275EAd8097C4A",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};
