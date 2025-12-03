const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
  res.json({ message: "Pokémon Mini Browser API is running!" });
});

// Pokémon endpoint skeleton
app.get("/pokemon", async (req, res) => {
  res.json({
    message: "This will return Pokémon data once implemented.",
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
