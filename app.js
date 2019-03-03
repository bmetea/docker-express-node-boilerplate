'use strict';
 
const express = require('express');
const app = new express();
 
app.get('/endpoint1', (req, res) => {
    res.send('This is endpoint 1');
});
app.get('/endpoint2', (req, res) => {
    res.send('This is endpoint 2');
});
 
app.listen(3000, () => {
    console.log('Server up!');
});
