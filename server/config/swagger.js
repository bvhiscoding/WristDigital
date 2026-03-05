const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WristDigital API",
      version: "1.0.0",
      description: "REST API for WristDigital e-commerce watch store",
    },
    servers: [{ url: "/api/v1", description: "Development server" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Error: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            message: { type: "string" },
          },
        },
      },
    },
    tags: [
      { name: "Auth", description: "Authentication endpoints" },
      { name: "Users", description: "User profile management" },
      { name: "Products", description: "Product catalog" },
      { name: "Categories", description: "Product categories" },
      { name: "Brands", description: "Product brands" },
      { name: "Cart", description: "Shopping cart" },
      { name: "Orders", description: "Order management" },
      { name: "Reviews", description: "Product reviews" },
      { name: "Wishlist", description: "User wishlist" },
      { name: "Blogs", description: "Blog posts" },
      { name: "Admin", description: "Admin operations" },
    ],
  },
  apis: ["./routes/*.js", "./routes/admin/*.js"],
};

module.exports = swaggerJsdoc(options);
