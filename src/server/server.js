// Declare Variables
const PORT = 8081;

// Require Express to run server and routes
const express = require("express");
const path = require("path"); // Import the path module
const app = express();

/* Middleware */
// Here we are configuring express to use body-parser as middleware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static(path.join(__dirname, "../client"))); // Adjust path to point to the 'client' folder

// Log directory to console
console.log(__dirname);

// Initialize main route
app.get("/", function (req, res) {
  // Use path.resolve to create an absolute path to index.html
  res.sendFile(path.resolve(__dirname, "../client/views", "index.html"));
});

// Setup Server
const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
