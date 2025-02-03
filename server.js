const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config();// ✅ Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Use MongoDB Atlas if running on Render, otherwise use local MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));


// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
