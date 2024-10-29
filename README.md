# Here are screenshorts

![image](https://github.com/user-attachments/assets/41423264-cebf-4762-884f-d58a8ab57cbd)
![image](https://github.com/user-attachments/assets/b831fddf-4f0a-46ac-9a5c-f906b9d58ca7)



# Setup Instructions:

1. Clone the repository: [ git clone https://github.com/username/repository-name.git ]
2. Navigate to the project directory: [ cd repository-name ]
3. Install the dependencies: [ npm install ]
4. Start the development server: [ npm start ]

# How to write code in parcel with git step by step

- git init
- git branch -M main
- git commit -m "episode-01"
- git remote add origin (copy paste from syntax from git)
- git push origin main
  <!-- Here How to install npm and parcel -->
  -[1] npm init - package name: (namaste-react-practice) - version: (1.0.0) - description: This is namaste react practice - entry point: (app.js) - test command: jest - git repository: - keywords: react, namaste react, practice, akshay shaini
  - author: Akshay saini - license: (ISC)
- [2] npm install -D parcel
<!-- you can delete node module it is easy to install (npm install) -->

# How to ignite app after installing parcel

    1. npx parcel index.html(source file: index.html)
    2. npm install react
    3. npm i react-dom
    4. When succesfully installed everythings then from package.json delete { "main": "App.js"}

# If error come then use this syntax

1.  npx parcel clean
2.  rm -rf .parcel-cache
3.  rm -rf dist
4.  rm -rf node_modules
    npm install
5.  npm update
6.  write minimal code
7.  npm install react react-dom
8.  npx parcel index.html

# Upload code from vs code steps:

- git add .
- git commit -m "updating"
- git push

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm , writtem in c++
- Caching - Faster Builds
- image Optimization
- Minification
- Bundling
- Compress
- Consistent Hahing
- Code Spliting
- Differential Bunding - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking -remove unused code
- Different dev and prod bundle

# parcel (start project after modifying script)

"scripts": {
"start": "parcel index.html",
"build":"parcel build index.html"
},

To start project
Type: npm run start/ npm start

To build project
Type: npm run build

# Food Ordering App Namaste React

- Header
  -Logo
  -nav Items
- Body
  -Search Bar
  -RestaurentContainer
  -Restaurent Card
  -
- Footer
  -copyright
  -Links
  -Address
  -Contact

# Two type of Export/Import

- Default Export/Import
  - export default Components;
  - import Components from "path"
- Named Export/Import
  - export const Components
  - import {Component} from "path";

# React Hooks

- (Normal js utilities functions)

* useState() - Superpowerful state variables in react
* useEfect() -

# 2 types Routing in web apps

- Client Side Routing (If we are not calling API then is called Client side routing)
- Server Side Routing (if we are calling API then this can be called Server side Routing)

1. These are same name

- Chunking | Code Spliting | dynamic-bundling | Lazy Loading | On-demand-loading
- (break down your website/app in smaller chunk)

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux ( npm install @reduxjs/toolkit)
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# React Redux
-  npm i react-redux

