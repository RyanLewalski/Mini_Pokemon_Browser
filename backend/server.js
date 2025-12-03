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


app.get("/pokemon", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Missing Pokemon name or ID" });
  }

  try {
    const { data : pokemon } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );

    const { data: species } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`
    );

    const result = {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map((t) => t.type.name),
      abilities: pokemon.abilities.map((a) => a.ability.name),
      sprite: pokemon.sprites.other["official-artwork"].front_default,
      stats: pokemon.stats.map((s) => ({
        name: s.stat.name,
        base: s.base_stat,
      })),
      description: 
        species.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        )?.flavor_text.replace(/\f/g, " ") || "No description available.",
    };

    res.json(result);
  } catch (error) {
    console.error("Error fetching Pokémon:", error.message);

    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Pokémon not found" });
    }

    res.status(500).json({ error: "Server error fetching Pokémon data" });
  }
});

app.get("/pokemon/list", async (req, res) => {
  const { search } = req.query;

  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );

    const detailedData = await Promise.all(
      data.results.map(async (pokemon) => {
        const { data: details } = await axios.get(pokemon.url);

        return {
          id: details.id,
          name: details.name,
          sprite: details.sprites.other["official-artwork"].front_default,
          types: details.types.map((t) => t.type.name),
        };
      })
    );

    let filtered = detailedData;
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter((p) => p.name.includes(q));
    }

    res.json({
      count: filtered.length,
      results: filtered,
    });
  } catch (err) {
    console.error("Error fetching Pokémon list:", err.message);
    res.status(500).json({ error: "Failed to fetch Pokémon list" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
