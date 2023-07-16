// import http module -  since features not available globally
// require keyword is used to import files in Node.js
// require('./path to your file.js') -> relative path
// require('/path to your file.js') -> absolute path
// or require('core_module.js') -> wont look for a local file -> looks for a global module names http

// ------------------------------------------------
// const http = require('http') // http imported
// ------------------------------------------------

// ------------------------------------------------
const express = require('express') // express package imported
// ------------------------------------------------

// ------------------------------------------------
const app = express();    
// ------------------------------------------------
// create expresss application and store it and running express as a function
// initiliazes new object where express js framework will store and manage
// this variable app is a reuest handler that can be passed as paramter to server
// app sets up way of handling incoming requests

// MIDDLEWARE: After creating app object, but before creating server
// ------------------------------------------------
app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allows request to continue to next middleware in line
}); 

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>');
}); 

// ------------------------------------------------
// Use allows to add new middleware function - accepts array of request handlers

// METHOD 2: TO HANDLE NODE MODULE SYSTEM USING OBJECT KEY-VALUE
// ------------------------------------------------
// const server = http.createServer(app)
// ------------------------------------------------
// app is passed here to create server

// ------------------------------------------------

//-------------------------------
// server.listen(3000);
//--------------------------------

// USING EXPRESS JS- app
// -------------------------------
app.listen(3000);
// ------------------------------
