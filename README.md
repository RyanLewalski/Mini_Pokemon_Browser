# Pokémon Mini Browser

A full-stack Pokémon browser built with **Node.js**, **Express**, and **React**. Fetches data from [PokéAPI](https://pokeapi.co/) and displays it in a responsive, searchable, and filterable grid.

---

## Features

- **Full-stack architecture**: Backend fetches and transforms Pokémon data, frontend displays it dynamically.
- **Responsive grid layout**: Pokémon cards adapt to screen size.
- **Search by name**: Quickly find Pokémon.
- **Filter by type**: Dynamic dropdown powered by backend.
- **Loading and error handling**: Visual feedback for API requests.
- **Modular CSS-in-JS styling**: Scoped styles to prevent global collisions.
- **Clean layout**: Centered grid with controls.

### Optional Next Improvements

- Debounced search for reduced API calls
- Pokémon detail modal or separate page
- Hover animations on cards
- Sorting options (A-Z, ID, Type)
- Pagination or infinite scroll
- Dark mode or theme customization
- Type-based card colors for visual polish

---

## Tech Stack

- **Backend**: Node.js, Express, Axios, CORS
- **Frontend**: React, Vite
- **Styling**: CSS-in-JS, modularized
- **Data Source**: [PokéAPI](https://pokeapi.co/)

---

## API Endpoints

- `/` – test route  
- `/pokemon/list` – fetch full or filtered Pokémon list  
  - Query parameters:  
    - `search` – filter by Pokémon name  
    - `type` – filter by Pokémon type  
- `/pokemon/types` – fetch all Pokémon types (excluding "unknown" and "shadow")  

---

## Setup Instructions

1. **Clone the repository**  
```bash
git clone <repo-url>
cd pokemon-mini-browser
