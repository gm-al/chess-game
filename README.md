# Chess Game

![Chess Game](https://github.com/Ghanem10/chess-game/assets/107857762/6721e483-f30a-42d6-8295-bfbb7ce4c0f3)


## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [License](#license)

## Project Overview
- Chess Game is a full-stack web application developed with the MERN stack (ReactJs, ExpressJs, NodeJs, MongoDB), offering a user-friendly interface with engaging features.

## Features
- [x] Multiplayer
- [x] Real-time Chat
- [x] Ranking System
- [x] Notification
- [x] Tournaments
- [x] OAuth - JWT
- [x] VS Engine
- [x] Add/Remove Friends
- [x] Create Tournaments
- [x] Invite Players
- [x] Resign, draws
- [x] Mobile and user friendly

## Technologies
- React.js
- Redux
- Node.js
- Express.js
- MongoDB
- SCSS
- JWT Authentication
- Passport.js


## Authentication
- The application uses token-based authentication - Auth and JWT tokens to verify and ensure the security of user access.

## Improvements
- Install docker and run the project in a container to reduce compatibility issues, and a fun thing to add is an engine with Rust.
  How to do the engine with Rust? Here are some basic steps to get you started:
  - Create a different project that can help you create tables faster for every possible position on the board.
  - Iteration over these tables to handle/control certain movements of pieces.
  - Consider the goal of the engine..

## Getting Started
 ### Prerequisites
  Before running the application, make sure you have the following installed:
    + Node.js
    + MongoDB or MongoDB Atlas account

  ### Installation
  1. Clone the repository.

         https://github.com/Ghanem10/chess-game.git
     
  2. Install dependencies for both the main directory and server.
     ```
     npm install
     ```
         cd server
         npm install
         
  4. Create a `.env` file in the `server folder` and add the environment variables as shown in the `.env.example` file.
  5. Start the server.

           cd server
           npm run dev:start
  6. Start the client by running `npm run dev` in the main directory.

           npm run dev

## License
This project is licensed under the [MIT License](https://github.com/Ghanem10/chess-game/blob/master/LICENSE).
     
