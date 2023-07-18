const path = require('path');

// ------------------------------------------------
const express = require('express'); // express package imported
const bodyParser = require('body-parser');
// ------------------------------------------------

// ------------------------------------------------
const app = express();    
// ------------------------------------------------

// ------------------------------------------------
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const contactRoutes = require('./routes/contactus.js');
// const successRoutes = require('./routes/success.js');
// -------------------------------------------------

// PARSER
// ------------------------------------------------
app.use(bodyParser.urlencoded()); 
// ------------------------------------------------

app.use(express.static(path.join(__dirname, 'public')))


// ------------------------------------------------
app.use('/admin', adminRoutes)    // order matters so if inserted after '/' doesnt reach
app.use('/shop', shopRoutes);
app.use(contactRoutes);
// app.use('/success', successRoutes);
// ------------------------------------------------

app.use('/success' , (req,res,next) => {
    res.send('<h1>Form submitted succesfully</h1>')
})

// -----------------------------------------------
// ERROR 404
app.use((req,res,next) => {
    // res.status(404).send('<h1> Page Not Found </h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
// ----------------------------------------------

// USING EXPRESS JS- app
// -------------------------------
app.listen(3000);
// ------------------------------
