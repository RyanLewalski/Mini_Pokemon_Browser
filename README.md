# Pokémon Mini Browser

A **full-stack Pokémon browser** (frontend-focused) built with **React and Vite**, showcasing Pokémon cards, type filters, search, and detailed modals. This was designed to be responsive, interactive, and visually clean.

---

## Features

* **Pokémon Grid:** Display all Pokémon in a responsive card layout.
* **Search:** Debounced search by Pokémon name for efficient API calls.
* **Type Filter:** Dynamic type filter fetched from the backend.
* **Detail Modal:** Click on any Pokémon to view details:

  * Artwork
  * ID, name, height, weight
  * Types and abilities
  * Stats visualized in a list

* **Card Hover Animations:** Subtle scale and shadow effects on hover.
* **Type-Based Styling:** Pokémon types shown as color-coded badges.
* **Responsive Layout:** Works on mobile, tablet, and desktop.

---

## Tech Stack

* **Frontend:** React + Vite
* **Backend:** Node.js + Express + Axios 
* **Styling:** CSS-in-JS (modularized per component)
* **Data Source:** [PokéAPI](https://pokeapi.co/)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RyanLewalski/Mini_Pokemon_Browser.git
cd Mini_Pokemon_Browser
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend 

```bash
cd backend
npm install
node server.js
```

> Backend runs on `http://localhost:3000`.

### 4. Start the frontend

```bash
npm run dev
```

> The app runs on `http://localhost:5173` by default. This is where you will access the project.

---

## Project Structure

```
src/
  components/
    PokemonCard.jsx       # Pokémon card component with hover animations
    PokemonDetailModal.jsx# Detail modal component
  styles/
    AppStyles.js          # Global layout and styling
    PokemonCardStyles.js  # Card styling and hover effects
    PokemonDetailStyles.js# Modal styling
    typeColor.js          # Type coloring
  App.jsx                 # Main app container
  main.jsx                # Vite entry point
backend/
  server.js               # Express API for Pokémon data
```

---

## Usage

1. **Search Pokémon:** Use the search bar at the top. Results update with a **debounced API call**.
2. **Filter by Type:** Select a type from the dropdown to filter Pokémon.
3. **View Details:** Click any Pokémon card to open a modal with detailed info.
4. **Responsive Layout:** Resize your browser to see the grid adapt automatically.

---

## Possible Future Improvements

* Dark mode toggle for a Pokédex feel.
* Sorting options (ID, name, type).
* Pokémon evolution chain in the modal.
* Favorite Pokémon / team builder.
* Animated backgrounds.

---


