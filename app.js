'use strict';
const express = require('express');
const app = express();

const fs = require('fs');


app.use('/statics', express.static('statics'));

let homeRouter = require('./router/home.js');

app.use('/', homeRouter);

app.listen(234, () => {

    console.log('监视端口234')

})