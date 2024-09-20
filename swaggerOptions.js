import { swaggerDefinition } from "./swaggerDefinition.js";

export const swaggerOptions = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./server.js"],
};
