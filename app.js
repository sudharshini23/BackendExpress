// ------------------------------------------------
// const http = require('http') // http imported
// ------------------------------------------------

// ------------------------------------------------
const express = require('express'); // express package imported
const bodyParser = require('body-parser');
// ------------------------------------------------

// ------------------------------------------------
const app = express();    
// ------------------------------------------------
// create expresss application and store it and running express as a function
// initiliazes new object where express js framework will store and manage
// this variable app is a reuest handler that can be passed as paramter to server
// app sets up way of handling incoming requests

// ------------------------------------------------
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
// -------------------------------------------------

// PARSER
// ------------------------------------------------
app.use(bodyParser.urlencoded({extended: false})); 
// ------------------------------------------------
// should come before other middleware requests
// exclusively for parsing form data bodies

// MIDDLEWARE: After creating app object, but before creating server

// ------------------------------------------------
app.use('/admin', adminRoutes)    // order matters so if inserted after '/' doesnt reach
app.use('/shop', shopRoutes);
// ------------------------------------------------

// -----------------------------------------------
// ERROR 404
app.use((req,res,next) => {
    res.status(404).send('<h1> Page Not Found </h1>')
})
// ----------------------------------------------

// ------------------------------------------------
// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); // Allows request to continue to next middleware in line
// }); 
// ------------------------------------------------

// ------------------------------------------------
// app.use('/add-product', (req, res, next) => {
//     // console.log('In add-product route middleware page');
//     // res.send('<h1>The "add-product" page!</h1>');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button></form>')
// }); 
// -----------------------------------------------

// -----------------------------------------------
// app.use('/product', (req, res, next) => {
//     // extracting what is sent by user
//     console.log(req.body)   // gives undefined - use parser
//     res.redirect('/');
// })

// ONLY FOR GET REQUESTS: app.get()
// FOR POST REQUESTS: app.post()
// app.post('/product', (req, res, next) => {
//     // extracting what is sent by user
//     console.log(req.body)   // gives undefined - use parser
//     console.log(req.body.size)
//     res.redirect('/');
// })

// ------------------------------------------------
// app.use('/', (req, res, next) => {
//     // console.log('In another middleware');
//     res.send('<h1>Hello from Express!</h1>');
// }); 
// ---------------------------------------------------

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
