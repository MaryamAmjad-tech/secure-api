const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware: Security Headers
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: [],
  },
}));

// Middleware: CORS
app.use(cors({
  origin: "http://localhost:3000", // Replace with frontend domain
  methods: ["GET", "POST"],
}));

// Middleware: Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Too many requests from this IP, try again later."
});
app.use(limiter);

// Middleware: API Key Check
app.use((req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "123456") {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized: Invalid API Key" });
  }
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Secure API!");
});

app.get("/data", (req, res) => {
  res.json({ message: "This is protected data." });
});

app.listen(PORT, () => {
  cons
