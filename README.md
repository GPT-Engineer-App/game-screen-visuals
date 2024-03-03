# game-screen-visuals

A Game screen. 
First row - a large centered graphic. 
Second row divided into columns 3 for Desktop - 1 column mobile 
Column 1 - Player section. 
Each player has a round avatar shown. Players are organized according to current rank which is a changing number. Every 45 seconds, the numbers are recalculated (randomized for now) - upon recalculation the avatars are rearranged with animation. 
Column 2 - game graph, shows a chart of game stats.  (updated every 45 seconds (randomized for now) 
Column 3 - game stats - show various text information about the game (updated every 45 seconds (randomized for now) 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/game-screen-visuals.git
cd game-screen-visuals
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
