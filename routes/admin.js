const express = require('express');

const router = express.Router();

// ------------------------------------------------------------
// router.get('/add-product', (req, res, next) => {
//     // console.log('In add-product route middleware page');
//     // res.send('<h1>The "add-product" page!</h1>');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button></form>')
// }); 
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// HERE BOTH METHODS GET AND POST HAVE SAME /admin -> SO REMOVE AND GO TO app.js file
// router.get('/admin/add-product', (req, res, next) => {
//     // console.log('In add-product route middleware page');
//     // res.send('<h1>The "add-product" page!</h1>');
//     res.send('<form action="/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button></form>')
// }); 

// --------------------------------------------------------------------------
// ALTERNATE WAY
// /admin/add-product
router.get('/add-product', (req, res, next) => {
    // console.log('In add-product route middleware page');
    // res.send('<h1>The "add-product" page!</h1>');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button></form>')
}); 
// ----------------------------------------------------------------
// METHODS ARE DIFFERENT HENCE SAME PATH CAN BE USED

// ----------------------------------------------------------------
// router.post('/product', (req, res, next) => {
//     // extracting what is sent by user
//     console.log(req.body)   // gives undefined - use parser
//     console.log(req.body.size)
//     res.redirect('/');
// })

// ----------------------------------------------------------------
// HERE BOTH METHODS GET AND POST HAVE SAME /admin -> SO REMOVE AND GO TO app.js file
// router.post('/admin/add-product', (req, res, next) => {
//     // extracting what is sent by user
//     console.log(req.body)   // gives undefined - use parser
//     console.log(req.body.size)
//     res.redirect('/');
// })
// ----------------------------------------------------------------

// ALTERNATE WAY
// ----------------------------------------------------------------
// /admin/add-product
router.post('/add-product', (req, res, next) => {
    // extracting what is sent by user
    console.log(req.body)   // gives undefined - use parser
    console.log(req.body.size)
    res.redirect('/');
})

module.exports = router;