// Import required modules
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const dotenv = require("dotenv");

dotenv.config();

const walletRoutes = require("./routes/walletRoute"); // Import wallet routes
const tonRatesRoutes = require("./routes/tonRatesRoute"); // Import the route

const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

// Define Swagger options for API documentation
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Specify the OpenAPI version
    servers: [
      {
        url: "http://localhost:3000/", // Define the server URL
      },
    ],
    info: {
      title: "Transaction history API for Shogun Telegram Bot", // Set the API title
      version: "1.0.0", // Set the API version
      description:
        "API for retrieving wallet transaction history across multiple blockchains", // Provide a description of the API
    },
  },
  apis: ["./controllers/*.js", "./routes/*.js"], // Ensure this points to your controller files
};

// Generate Swagger specification
const specs = swaggerJsdoc(swaggerOptions);

// Set up Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Use wallet routes
app.use("/api", walletRoutes); // Mount wallet routes

// Mount ton rates route
app.use("/api", tonRatesRoutes); // Mount the route

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // Start the server and log the port it's listening on
