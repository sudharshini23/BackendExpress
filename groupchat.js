const express = require('express');

const fs = require('fs');

// const localStorage = require('node-localstorage').localStorage;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded()); 

// const localStoragePath = '/tmp/localStorage';

// app.use(express.json());

// document.getElementById('username').value = 
app.get("/", (req,res) => {
    fs.readFile('userDetails.txt', (err, data) => {
        if(err) {
            console.log(err);
            data = 'No chat exists'
        }
        res.send(
            `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
            <input type="text" name="message" id="message">
            <input type="hidden" name="username" id="username">
            <button type="submit">Send</button>
            </form>`
        );
    })
});

app.post("/", (req,res) => {
    console.log(req.body.username);
    console.log(req.body.message)
    fs.writeFile("userDetails.txt", `${req.body.username}: ${req.body.message}`, {flag: 'a'}, (err) =>
        err ? console.log(err) : res.redirect("/")
    );
});

app.get("/login", (req,res) => {
    res.send(
        `<form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
        <input id="username" type="text" name="username">
        <button type="submit">Login</button>
        </form>`
    );
});

app.post("/login", (req, res) => {
    res.redirect("/");
})

app.listen(4000);